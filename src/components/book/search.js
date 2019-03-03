import React, { useState } from "react"
import { Box, Heading, Anchor } from "grommet"
import { SearchInput } from "../search-input"
import { of } from "rxjs"

const SearchResult = ({ books }) => (
  <Box justify="center" pad="small" gap="small" direction="column">
    {books.map(book => (
      <Book key={book.id} {...book} />
    ))}
  </Box>
)

const Book = ({ id, title, provider, price, unit }) => (
  <Box
    direction="column"
    pad="medium"
    width="large"
    height="small"
    elevation="small"
  >
    <Anchor href={`book/${id}`}>
      <Heading color="neutral-1" level={5}>
        {title}
      </Heading>
    </Anchor>
    <Box direction="row">
      <span> {unit}</span>
      <Heading color="neutral-1" level={2}>
        {price}
      </Heading>
    </Box>
    <Box round="medium">{provider}</Box>
  </Box>
)

export const allBooks = [
  {
    id: 111,
    author: "Must Read Summaries",
    title: "The Lean Startup  Eric Ries",
    provider: "Amazonas E4",
    price: "20.00",
    unit: "S/",
    features: ["paperWhite", "new"],
  },
  {
    id: 222,
    author: "Instaread",
    title: "Summary of The Lean Startup",
    provider: "Amazonas B1",
    price: "10.00",
    unit: "S/",
    features: ["paperWhite", "used"],
  },
]

export const SearchBooks = () => {
  const [books, setBooks] = useState([])

  const search = term => {
    const result = allBooks.filter(byTitle(term))
    setBooks(result)
  }

  return (
    <Box>
      <SearchInput suggestionsFor={getSuggestions} onChoose={search} />
      <SearchResult books={books} />
    </Box>
  )
}

const getSuggestions = term => {
  return of(allBooks.filter(byTitle(term)).map(book => ({ name: book.title })))
}

function byTitle(term) {
  return ({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) >= 0
}
