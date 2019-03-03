import React, { useState } from "react"
import { connect } from "react-redux"
import { Add, Trash, Edit } from "grommet-icons"
import { Form, FormField, Box, Button } from "grommet"
import {
  addBookCopie,
  saveBookCopie,
  deleteBookCopie,
} from "../../state/book/actions"
import { suggestionsBasedCurrentFeatures } from "./feature-suggestions"
const ReactTags = require("react-tag-autocomplete")
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
      <Box>
        <h3>Ejemplares</h3> <Button icon={<Add />} onClick={add} />
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
    <Box
      direction="column"
      pad="medium"
      round="small"
      border={{
        side: "all",
        color: "border",
      }}
    >
      <Form onSubmit={submitCopie} value={bookCopie}>
        <BookFeatures
          features={features}
          changeFeatures={changeFeatures}
          suggestions={suggestions}
        />
        <FormField label="Precio" name="price" />
        <FormField label="Cantidad" name="quantity" />
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
    <FormField label="Características" name="features">
      <ReactTags
        placeholder=""
        tags={features}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        allowNew={false}
      />
    </FormField>
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
