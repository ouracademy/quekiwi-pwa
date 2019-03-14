import React, { useState } from "react"
import { connect } from "react-redux"
import { Add, Trash, Edit } from "grommet-icons"
import { Form, FormField, Box, Button } from "grommet"
import { saveBookCopie, deleteBookCopie } from "../../state/book/actions"
import { addBookCopy } from "../../state/book/add-copy"
import { suggestionsBasedCurrentFeatures } from "./feature-suggestions"
import styled from "styled-components"

const ReactTags = require("react-tag-autocomplete")

const FormFieldWidthAll = styled(FormField)`
  width: 100%;
  margin: 10px;
`

const BookCopies = ({ bookId, bookCopies, deleteBookCopie, addBookCopy }) => {
  const [showForm, setShowForm] = useState(false)

  const add = bookCopy => {
    addBookCopy({ bookId, ...bookCopy })
    setShowForm(false)
  }

  return (
    <Box>
      <Box direction="row" gap="small" align="center">
        <div>Añadir ejemplares</div>
        <Button
          icon={<Add color="brand" />}
          onClick={() => setShowForm(true)}
        />
      </Box>
      {showForm && <FormBookCopie saveBookCopie={add} />}
      <Box direction="column" gap="small">
        {bookCopies.map(x => (
          <BookCopie
            key={x.id}
            bookCopie={x}
            deleteBookCopie={deleteBookCopie}
          />
        ))}
      </Box>
    </Box>
  )
}

const BookCopie = ({ bookCopie, deleteBookCopie }) => {
  const deleteCopie = () => {
    deleteBookCopie(bookCopie.id)
  }

  return (
    <Box direction="row" align="center">
      <Box width="medium">
        {bookCopie.quantity} {bookCopie.features.map(x => x.name).join(", ")} a
        s/. {bookCopie.price}
      </Box>
      <Box direction="row" justify="end" fill>
        <Button type="submit" icon={<Edit />} />
        <Button icon={<Trash />} onClick={deleteCopie} />
      </Box>
    </Box>
  )
}

const FormBookCopie = ({ bookCopie = {}, saveBookCopie }) => {
  const [features, setFeatures] = useState(bookCopie.features || [])
  const [suggestions, setSuggestions] = useState(
    suggestionsBasedCurrentFeatures(features)
  )

  const submitCopie = ({ value }) => {
    saveBookCopie({ ...bookCopie, ...value, features: features })
  }

  const changeFeatures = features => {
    setSuggestions(suggestionsBasedCurrentFeatures(features))
    setFeatures(features)
  }

  return (
    <Box direction="column" pad="medium" round="small" elevation="small">
      <Form onSubmit={submitCopie} value={bookCopie}>
        <Box direction="row-responsive" fill wrap={true}>
          <Box direction="row" fill basis="full">
            <BookFeatures
              features={features}
              changeFeatures={changeFeatures}
              suggestions={suggestions}
            />
          </Box>
          <Box direction="row" basis="1/2">
            <FormFieldWidthAll
              label="Precio (soles)"
              name="price"
              type="number"
              min="0"
              step="0.1"
              required
            />
          </Box>
          <Box direction="row" basis="1/2">
            <FormFieldWidthAll
              label="Cantidad"
              name="quantity"
              type="number"
              min="0"
              step="1"
            />
          </Box>
          <Button type="submit" label="Guardar" />
        </Box>
      </Form>
    </Box>
  )
}

const BookFeatures = ({ features = [], suggestions = [], changeFeatures }) => {
  const handleDelete = index => {
    changeFeatures(features.filter((tag, i) => i !== index))
  }

  const handleAddition = ({ name, type = "any" }) => {
    changeFeatures([...features, { name, type }])
  }

  return (
    <FormFieldWidthAll label="Características" name="features">
      <ReactTags
        placeholder=""
        tags={features}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        allowNew={false}
      />
    </FormFieldWidthAll>
  )
}

const mapStateToProps = ({ book }) => ({
  bookCopies: book.bookCopies,
})

export default connect(
  mapStateToProps,
  { addBookCopy, saveBookCopie, deleteBookCopie }
)(BookCopies)
