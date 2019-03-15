import React from "react"
import { Form, FormField, Box, Button, Heading } from "grommet"
import { navigate } from "@reach/router"
import { pluck } from "rxjs/operators"
import * as queryString from "query-string"
import { api } from "../../state/standard-request/api"

const addBook = book =>
  api
    .post("books")(book)
    .pipe(pluck("response"))

export const AddNewBook = ({ location }) => {
  const queryParams = queryString.parse(location.search)
  const initialValue = { title: queryParams.title }
  const handleAddBook = book => {
    addBook(book)
      .toPromise()
      .then(book => navigate(`/book/register/${book.id}/copies`))
  }

  return (
    <div>
      <Heading color="neutral-1" level={3}>
        2. Ingresa ...
      </Heading>
      <Book addBook={handleAddBook} initialValue={initialValue} />
    </div>
  )
}

const Book = ({ addBook, initialValue }) => (
  <Box direction="row">
    <Cover />
    <Form
      onSubmit={({ value }) => {
        addBook(value)
      }}
      value={initialValue}
    >
      <FormField label="Titulo" name="title" required />
      <FormField label="Subtitulo" name="subtitle" />
      <Button type="submit" label="Ingresar" primary />
    </Form>
  </Box>
)

// TODO: cover with a main image & below three images
const Cover = () => <div />
