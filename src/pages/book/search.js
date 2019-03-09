import React from "react"
import { Box, Text } from "grommet"
import { navigate, Link } from "@reach/router"
import { connect } from "react-redux"

import { SearchInput } from "../../components/search-input"
import { of } from "rxjs"
import { Books } from "../../components/book/list"
import { getBook } from "../../state/book/actions"
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

const SearchBooks = ({ location }) => {
  const queryParams = queryString.parse(location.search)
  const searchTerm = queryParams.term || ""

  const search = term => navigate(`/book/register/search?term=${term}`)

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
        {searchTerm && <SearchContent searchTerm={searchTerm} />}
      </Box>
    </div>
  )
}

const onChooseBook = id => {
  getBook(id)
  navigate(`/book/register/step-2`)
}

const SearchContent = ({ searchTerm }) => {
  const books = searchTerm ? allBooks.filter(byTitle(searchTerm)) : []
  return (
    <Box>
      <Box direction="row" justify="between" align="start">
        <h4>{books.length > 0 ? existBooks.message : emptyBooks.message}</h4>
        <Box align="start" gap="small" direction="row">
          <Text color="brand" weight="bold">
            {books.length > 0
              ? existBooks.messageForRegister
              : emptyBooks.messageForRegister}
          </Text>
          <Link to="/book/register/new">Registralo aquí</Link>
        </Box>
      </Box>
      <Books books={books} onChooseBook={onChooseBook} />
    </Box>
  )
}

export const Search = connect(
  null,
  { getBook }
)(SearchBooks)

const getSuggestions = term => {
  return of(allBooks.filter(byTitle(term)).map(book => ({ name: book.title })))
}

function byTitle(term) {
  return ({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) >= 0
}
