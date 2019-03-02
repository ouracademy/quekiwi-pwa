import React from "react"
import { connect } from "react-redux"
import { Form, FormField, Box, Button } from "grommet"
import { SearchInput } from "../../components/search-input"
import BookCopies from "../../components/book/book-copies"
import { getBookCopies, addBook } from "../../state/book/actions"
import { of } from "rxjs"
const isEmpty = object =>
  object === null || object === undefined || Object.keys(object).length === 0
const books = [
  {
    name: "Alan Souza",
  },
  {
    name: "Bryan Jacquot",
  },
  {
    name: "Chris Carlozzi",
  },
  {
    name: "Eric Soderberg",
  },
  {
    name: "Marlon Parizzotto",
  },
  {
    name: "Tales Chaves",
  },
  {
    name: "Tracy Barmore",
  },
]

const RegisterBook = ({ book, getBookCopies, addBook }) => {
  const handleAddBook = book => {
    addBook(book)
    getBookCopies({ id: book.id })
  }

  return (
    <div>
      <h1>Registra tus libros :)</h1>
      <h3>1. Busca tu libro</h3>
      <SearchInput
        suggestionsFor={getSuggestions}
        onChoose={searchText => console.log("BUscando", searchText)}
      />
      <Book getBookCopies={getBookCopies} book={book} addBook={handleAddBook} />
      {!isEmpty(book) && <BookCopies />}
    </div>
  )
}

const getSuggestions = term => {
  return of(
    books.filter(
      ({ name }) => name.toLowerCase().indexOf(term.toLowerCase()) >= 0
    )
  )
}

const Book = ({ book = {}, addBook }) => {
  const submit = ({ value }) => {
    addBook({ id: 1, ...value })
  }

  return (
    <Box direction="row">
      <Cover />
      <Form onSubmit={submit} value={book}>
        <FormField label="Titulo" name="title" required />
        <FormField label="Subtitulo" name="subtitle" />
        {isEmpty(book) && <Button type="submit" label="Ingresar" primary />}
      </Form>
    </Box>
  )
}

// TODO: cover with a main image & below three images
const Cover = () => <div />

const mapStateToProps = ({ book }) => ({ book: book.book })
export default connect(
  mapStateToProps,
  { getBookCopies, addBook }
)(RegisterBook)
