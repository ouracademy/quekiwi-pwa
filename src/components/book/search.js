import React, { useState } from "react"
import { Box, Heading, Text } from "grommet"
import { SearchInput } from "../search-input"
import { of } from "rxjs"

const SearchResult = ({ books, onChooseBook }) => (
  <Box justify="center" pad="small" gap="small" direction="column">
    {books.map(book => (
      <Book key={book.id} {...book} onChooseBook={onChooseBook} />
    ))}
  </Box>
)

const Book = ({ id, title, authors, onChooseBook }) => (
  <Box
    pad="medium"
    height="small"
    border="bottom"
    onClick={event => onChooseBook(id)}
  >
    <Heading level="4">{title}</Heading>
    <Text>{authors.join(", ")}</Text>
  </Box>
)

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

export const SearchBooks = ({ onChooseBook }) => {
  const [books, setBooks] = useState([])

  const search = term => {
    const result = allBooks.filter(byTitle(term))
    setBooks(result)
  }

  return (
    <Box>
      <SearchInput suggestionsFor={getSuggestions} onChoose={search} />
      <SearchResult books={books} onChooseBook={onChooseBook} />
    </Box>
  )
}

const getSuggestions = term => {
  return of(allBooks.filter(byTitle(term)).map(book => ({ name: book.title })))
}

function byTitle(term) {
  return ({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) >= 0
}
