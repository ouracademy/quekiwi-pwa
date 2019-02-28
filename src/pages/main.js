import React, { useState } from "react"
import { Box, TextInput, Heading } from "grommet"
import { Search } from "grommet-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SearchResult = ({ books }) => {
  const bookList = books.map((book, index) => (
    <Box padding="small">
      <Heading level={5} margin="none">
        {book.title}
      </Heading>
    </Box>
  ))
  return (
    <Box align="center" justify="center" pad="small" direction="column">
      {bookList}
    </Box>
  )
}
const SearchInput = ({ search }) => (
  <Box
    align="center"
    justify="center"
    pad="small"
    width="large"
    direction="row"
    align="center"
    pad={{ horizontal: "small", vertical: "xsmall" }}
    round="small"
    elevation="small"
    border={{
      side: "all",
      color: "border",
    }}
  >
    <Search color="brand" />
    <TextInput
      type="search"
      plain
      onChange={search}
      placeholder="Ingresa el libro a buscar..."
    />
  </Box>
)

const MainPage = () => {
  const allBooks = [
    {
      authors: "Must Read Summaries",

      title: "The Lean Startup  Eric Ries",
    },
    {
      authors: "Instaread",

      title: "Summary of The Lean Startup",
    },
  ]

  const [books, setBooks] = useState([])

  const search = ({ target }) => {
    setBooks(allBooks.filter(book => book.title.startsWith(target.value)))
  }

  return (
    <Layout>
      <SEO title="Buscador" keywords={[`buscador`, `quekiwi`, `libros`]} />
      <Box
        height="xlarge"
        fill
        align="center"
        justify="center"
        direction="column"
      >
        <SearchInput search={search} />
        <SearchResult books={books} />
      </Box>
    </Layout>
  )
}

export default MainPage
