import React from "react"
import { Form, FormField, Box, Button, Heading } from "grommet"
import { navigate } from "@reach/router"
import { ajax } from "rxjs/ajax"

const addBook = book => ajax.post("http://localhost:3000/books", book)

export const AddNewBook = () => {
  const handleAddBook = book => {
    addBook(book)
      .toPromise()
      .then(book => navigate("/book/register/step-2"))
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

const Book = ({ addBook }) => (
  <Box direction="row">
    <Cover />
    <Form
      onSubmit={({ value }) => {
        addBook(value)
      }}
    >
      <FormField label="Titulo" name="title" required />
      <FormField label="Subtitulo" name="subtitle" />
      <Button type="submit" label="Ingresar" primary />
    </Form>
  </Box>
)

// TODO: cover with a main image & below three images
const Cover = () => <div />
