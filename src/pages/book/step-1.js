import React from "react"
import { Box, Text } from "grommet"
import { Link, navigate } from "@reach/router"

import { SearchInput } from "../../components/search-input"
import { of } from "rxjs"
import { Books } from "../../components/book/list"

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

export const Step1 = ({ children }) => {
  const search = term => {
    navigate(`/book/register/step-1/search/${term}`)
  }

  return (
    <Box gap="medium" direction="column">
      <Box direction="column" justify="between">
        <h4>¿Qué título tiene?</h4>
        <SearchInput suggestionsFor={getSuggestions} onChoose={search} />
      </Box>
      {children}
    </Box>
  )
}

export const ListBooks = ({ term = "" }) => {
  const onChooseBook = id => navigate(`/book/register/step-2?id=${id}`)

  const books = allBooks.filter(byTitle(term))

  const [existBooks, emptyBooks] = [
    {
      message: "¿Cuál de los siguientes es el libro que vas a registrar?",
      messageForRegister: "¿No lo encontraste?",
    },
    {
      message:
        "No encontramos libros que correspondan al titulo que has escrito",
      messageForRegister: "Pero tranquilo",
    },
  ]

  return (
    <Box direction="column">
      <Box direction="row" justify="between" align="start">
        <h4>{books.length > 0 ? existBooks.message : emptyBooks.message}</h4>
        <Box align="start" gap="small" direction="row">
          <Text color="brand" weight="bold">
            {books.length > 0
              ? existBooks.messageForRegister
              : emptyBooks.messageForRegister}
          </Text>
          <Link to="/book/register/step-2">Registralo aquí</Link>
        </Box>
      </Box>
      <Books books={books} onChooseBook={onChooseBook} />
    </Box>
  )
}

const getSuggestions = term => {
  return of(allBooks.filter(byTitle(term)).map(book => ({ name: book.title })))
}

function byTitle(term) {
  return ({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) >= 0
}
