import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Form, FormField, Box, Button } from "grommet"
import { SearchInput } from "../../components/search-input"
import BookCopies from "../../components/book/book-copies"
import { getBookCopies } from "../../state/book/actions"
import { of } from "rxjs"
const isEmpty = object => Object.keys(object).length === 0
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

const RegisterBook = ({ getBookCopies }) => {
  const [book, setBook] = useState()
  useEffect(() => {
    getBookCopies(book)
  })
  //when search input devulve book use setBook and get bookCopies
  return (
    <div>
      <h1>Registra tus libros :)</h1>
      <h3>1. Busca tu libro</h3>
      <SearchInput
        suggestionsFor={getSuggestions}
        onChoose={searchText => console.log("BUscando", searchText)}
      />
      <Book getBookCopies={getBookCopies} book={book} />
      <BookCopies />
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

const Book = ({ getBookCopies, book = {} }) => {
  const [data, setData] = useState(book)
  const submit = ({ value }) => {
    getBookCopies({ bookId: 1 })
    setData(value)
  }
  useEffect(() => {
    if (!isEmpty(book)) {
      getBookCopies(book)
    }
  })

  return (
    <Box direction="row">
      <Cover />
      <Form onSubmit={submit} value={data}>
        <FormField label="Titulo" name="title" required />
        <FormField label="Subtitulo" name="subtitle" />
        {isEmpty(data) && <Button type="submit" label="Ingresar" primary />}
      </Form>
    </Box>
  )
}

// TODO: cover with a main image & below three images
const Cover = () => <div />

const mapStateToProps = ({ book }) => ({})
export default connect(
  mapStateToProps,
  { getBookCopies }
)(RegisterBook)
