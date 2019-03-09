import React from "react"
import { connect } from "react-redux"
import { Form, FormField, Box, Button, Heading } from "grommet"
import { addBook } from "../../state/book/actions"
import { navigate } from "@reach/router"

const AddNewBook = ({ addBook }) => {
  const handleAddBook = book => {
    addBook(book)
    navigate("/book/register/step-2")
  }

  return (
    <div>
      <Heading color="neutral-1" level={3}>
        2. Ingresa ...
      </Heading>
      <Book addBook={handleAddBook} />
    </div>
  )
}

const Book = ({ addBook }) => {
  const submit = ({ value }) => {
    addBook(value)
  }

  return (
    <Box direction="row">
      <Cover />
      <Form onSubmit={submit}>
        <FormField label="Titulo" name="title" required />
        <FormField label="Subtitulo" name="subtitle" />
        <Button type="submit" label="Ingresar" primary />
      </Form>
    </Box>
  )
}

// TODO: cover with a main image & below three images
const Cover = () => <div />

export const New = connect(
  null,
  { addBook }
)(AddNewBook)
