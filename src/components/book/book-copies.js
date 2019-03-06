import React, { useState } from "react"
import { connect } from "react-redux"
import { Add, Trash, Edit } from "grommet-icons"
import { Form, FormField, Box, Heading, Button } from "grommet"
import {
  addBookCopie,
  saveBookCopie,
  deleteBookCopie,
} from "../../state/book/actions"
import { suggestionsBasedCurrentFeatures } from "./feature-suggestions"
import styled from "styled-components"

const ReactTags = require("react-tag-autocomplete")

const FormFieldWidthAll = styled(FormField)`
  width: 100%;
  margin: 10px;
`

const BookCopies = ({
  bookCopies,
  bookId,
  addBookCopie,
  saveBookCopie,
  deleteBookCopie,
}) => {
  const add = () => {
    addBookCopie({ bookId, id: bookCopies.length + 1 })
  }
  return (
    <Box>
      <Box direction="row" gap="small" align="center">
        <div>Ejemplares</div>
        <Button icon={<Add />} onClick={add} />
      </Box>
      <Box direction="column" gap="small">
        {bookCopies.map((x, index) => (
          <BookCopie
            key={index}
            bookCopie={x}
            saveBookCopie={saveBookCopie}
            deleteBookCopie={deleteBookCopie}
          />
        ))}
      </Box>
    </Box>
  )
}
const BookCopie = ({ bookCopie = {}, saveBookCopie, deleteBookCopie }) => {
  const [features, setFeatures] = useState(bookCopie.features || [])
  const [suggestions, setSuggestions] = useState(
    suggestionsBasedCurrentFeatures(features)
  )
  const submitCopie = ({ value }) => {
    saveBookCopie({ ...bookCopie, ...value, features: features })
  }
  const deleteCopie = () => {
    deleteBookCopie(bookCopie.id)
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
              label="Precio"
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
        </Box>

        <Box direction="row" justify="end" fill>
          <Button type="submit" icon={<Edit />} />
          <Button icon={<Trash />} onClick={deleteCopie} />
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
  bookId: book.book.id,
})

export default connect(
  mapStateToProps,
  { addBookCopie, saveBookCopie, deleteBookCopie }
)(BookCopies)
