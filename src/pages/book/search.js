import React, { useEffect, useState } from "react"
import { Box, Text } from "grommet"
import { navigate, Link } from "@reach/router"
import { connect } from "react-redux"
import { ajax } from "rxjs/ajax"
import { SearchInput } from "../../components/search-input"
import { pluck } from "rxjs/operators"
import { Books } from "../../components/book/list"
import * as queryString from "query-string"

export const allBooks = [
  {
    id: 111,
    title: "El método Lean Startup",
    subtitle: "Cómo crear empresas de éxito utilizando la innovación continua",
    authors: ["Eric Ries"],
  },
  {
    id: 222,
    title: "El camino hacia el Lean Startup",
    authors: ["Eric Ries"],
  },
]

const [existBooks, emptyBooks] = [
  {
    message: "¿Cuál de los siguientes es el libro que vas a registrar?",
    messageForRegister: "¿No lo encontraste?",
  },
  {
    message: "No encontramos libros que correspondan al titulo que has escrito",
    messageForRegister: "Pero tranquilo",
  },
]

const SearchBooks = ({ location, getBook }) => {
  const queryParams = queryString.parse(location.search)
  const searchTerm = queryParams.term || ""

  const [books, setBooks] = useState([])
  useEffect(() => {
    const $books = findByTitle(searchTerm).subscribe({
      next: setBooks,
    })

    return () => $books.unsubscribe()
  }, [searchTerm])

  const search = term => navigate(`/book/register/search?term=${term}`)

  const goToAddBookCopies = id => {
    navigate(`/book/register/${id}/copies`)
  }

  return (
    <div>
      <Box gap="medium">
        <Box justify="between">
          <h4>¿Qué título tiene?</h4>
          <SearchInput
            value={searchTerm}
            suggestionsFor={getSuggestions}
            onChoose={search}
          />
        </Box>
        {searchTerm && (
          <SearchContent
            books={books}
            searchTerm={searchTerm}
            onChooseBook={goToAddBookCopies}
          />
        )}
      </Box>
    </div>
  )
}

const SearchContent = ({ books, onChooseBook, searchTerm }) => (
  <Box>
    <Box direction="row" justify="between" align="start">
      <h4>{books.length > 0 ? existBooks.message : emptyBooks.message}</h4>
      <Box align="start" gap="small" direction="row">
        <Text color="brand" weight="bold">
          {books.length > 0
            ? existBooks.messageForRegister
            : emptyBooks.messageForRegister}
        </Text>
        <Link
          to={`/book/register/new${searchTerm ? "?title=" + searchTerm : ""}`}
        >
          Registralo aquí
        </Link>
      </Box>
    </Box>
    <Books books={books} onChooseBook={onChooseBook} />
  </Box>
)

export const Search = connect(
  null,
  { getBook }
)(SearchBooks)

const getSuggestions = title => {
  return ajax
    .get(`http://localhost:3000/books/autocomplete?title=${title}`)
    .pipe(pluck("response"))
}

const findByTitle = title => {
  return ajax
    .get(`http://localhost:3000/books/short-info?title=${title}`)
    .pipe(pluck("response"))
}
