import React from "react"
import { Box } from "grommet"
import { Link, navigate } from "@reach/router"
import { connect } from "react-redux"

import { SearchInput } from "../../components/search-input"
import { of } from "rxjs"
import { Books } from "../../components/book/list"
import { getBook } from "../../state/book/actions"

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
  const search = term => navigate(`/book/register/step-1/search/${term}`)

  return (
    <div>
      <Box direction="row" justify="between">
        <h3>1. Busca tu libro</h3>
        <div>
          ¿No lo encontraste?{" "}
          <Link to="/book/register/step-2">Registralo aquí</Link>
        </div>
      </Box>
      <Box>
        <SearchInput suggestionsFor={getSuggestions} onChoose={search} />
        {children}
      </Box>
    </div>
  )
}

export const ListBooksPresentation = ({ term = "", getBook }) => {
  const onChooseBook = id => {
    getBook(id)
    navigate(`/book/register/step-2`)
  }

  const books = allBooks.filter(byTitle(term))

  return <Books books={books} onChooseBook={onChooseBook} />
}

export const ListBooks = connect(
  null,
  { getBook }
)(ListBooksPresentation)

const getSuggestions = term => {
  return of(allBooks.filter(byTitle(term)).map(book => ({ name: book.title })))
}

function byTitle(term) {
  return ({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) >= 0
}
