import React from "react"
import { Add } from "grommet-icons"
import { Form, FormField, Box } from "grommet"

export const RegisterBook = () => (
  <div>
    <SearchBook />
    <Book />
    <BookCopies />
  </div>
)

export const SearchBook = () => <div>{/* TODO: autocomplete :) */}</div>

const submit = ({ value }) => console.log(value)
export const Book = () => (
  <Box direction="row">
    <Cover />
    <Form onSubmit={submit}>
      <FormField label="Titulo" name="title" required />
      <FormField label="Subtitulo" name="subtitle" />
    </Form>
  </Box>
)

const bookCopies = []

export const BookCopies = () => (
  <Box>
    <Box>
      <h3>Ejemplares</h3> <Add />
    </Box>

    {bookCopies.map(x => (
      <BookCopie key={x.id} />
    ))}
  </Box>
)

export const BookCopie = () => (
  <Box direction="column">
    <Form>
      <BookFeatures />
      <FormField label="Precio" name="price" />
      <FormField label="Cantidad" name="quantity" />
    </Form>
  </Box>
)

export const BookFeatures = () => (
  <FormField label="Características" name="feature" required />
)

// TODO: cover with a main image & below three images
export const Cover = () => <div />
