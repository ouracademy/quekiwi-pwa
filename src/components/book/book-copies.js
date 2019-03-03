import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Add, Trash, Edit } from "grommet-icons"
import { Form, FormField, Box, Button } from "grommet"
import { addBookCopie, saveCopie, deleteCopie } from "../../state/book/actions"
import { suggestionsBasedCurrentFeatures } from "./feature-suggestions"
const ReactTags = require("react-tag-autocomplete")
const BookCopies = ({ data, bookId, addBookCopie, saveCopie, deleteCopie }) => {
  const addCopie = () => {
    addBookCopie({ bookId, id: data.length + 1 })
  }
  return (
    <Box>
      <Box>
        <h3>Ejemplares</h3> <Button icon={<Add />} onClick={addCopie} />
      </Box>
      <Box direction="column" gap="small">
        {data.map((x, index) => (
          <BookCopie
            key={index}
            data={x}
            save={saveCopie}
            remove={deleteCopie}
          />
        ))}
      </Box>
    </Box>
  )
}
const BookCopie = ({ data = {}, save, remove }) => {
  const [features, setFeatures] = useState(data.features || [])
  const [suggestions, setSuggestions] = useState(
    suggestionsBasedCurrentFeatures(features)
  )
  const submitCopie = ({ value }) => {
    save({ ...data, ...value, features: features })
  }
  const deleteCopie = () => {
    remove(data.id)
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
      <Form onSubmit={submitCopie} value={data}>
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
  data: book.data,
  bookId: book.book.id,
})

export default connect(
  mapStateToProps,
  { addBookCopie, saveCopie, deleteCopie }
)(BookCopies)
