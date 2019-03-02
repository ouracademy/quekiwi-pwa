import React, { useState } from "react"
import { connect } from "react-redux"
import { Add, Trash, Edit } from "grommet-icons"
import { Form, FormField, Box, Button } from "grommet"
import { addBookCopie, saveCopie, deleteCopie } from "../../state/book/actions"
const ReactTags = require("react-tag-autocomplete")

const BookCopie = ({ data, save, remove }) => (
  <Box pad="medium" round="small" border="all">
    <Form onSubmit={({ value }) => save(value)} value={data}>
      <BookFeatures />
      <FormField label="Precio" name="price" />
      <FormField label="Cantidad" name="quantity" />
      <Box direction="row" justify="end" fill>
        <Button type="submit" icon={<Edit />} />
        <Button icon={<Trash />} onClick={() => remove(data.id)} />
      </Box>
    </Form>
  </Box>
)

const BookFeatures = () => {
  const suggestions = [
    { name: "Usado", type: "time", uniqueInType: true },
    { name: "Nuevo", type: "time", uniqueInType: true },
    { name: "Hoja blanca", type: "color", uniqueInType: true },
    { name: "Hoja bulqui", type: "color", uniqueInType: true },
    { name: "Tapa dura", type: "any" },
  ]
  const [tags, setTags] = useState([])

  const handleDelete = index => {
    setTags(tags.filter((tag, i) => i !== index))
  }

  const handleAddition = ({ name, type = "any" }) => {
    setTags([...tags, { name, type }])
  }

  const handleValidate = ({ uniqueInType, type }) => {
    const alreadyExistType = uniqueInType && tags.find(tag => tag.type === type)
    return !alreadyExistType
  }

  return (
    <FormField label="Características" name="features">
      <ReactTags
        placeholder=""
        tags={tags}
        suggestions={suggestions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleValidate={handleValidate}
        allowNew={true}
      />
    </FormField>
  )
}

const BookCopies = ({ data, bookId, addBookCopie, saveCopie, deleteCopie }) => (
  <Box>
    <Box>
      <h3>Ejemplares</h3>{" "}
      <Button icon={<Add />} onClick={() => addBookCopie({ bookId })} />
    </Box>
    <Box direction="column" gap="small">
      {data.map((x, index) => (
        <BookCopie key={index} data={x} save={saveCopie} remove={deleteCopie} />
      ))}
    </Box>
  </Box>
)

const mapStateToProps = ({ book }) => ({
  data: book.data,
  bookId: book.bookId,
})

export default connect(
  mapStateToProps,
  { addBookCopie, saveCopie, deleteCopie }
)(BookCopies)
