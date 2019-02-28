import React, { useState } from "react"
import { Box, TextInput, Heading } from "grommet"
import { Search } from "grommet-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SearchResult = ({ books }) => {
  const bookList = books.map((book, index) => (
    <Box
      pad="medium"
      direction="column"
      width="large"
      height="small"
      elevation="small"
    >
      <Heading color="neutral-1" level={5}>
        {book.title}
      </Heading>
      <Heading color="neutral-1" level={6}>
        {book.author}
      </Heading>
    </Box>
  ))
  return (
    <Box
      align="center"
      justify="center"
      pad="small"
      gap="small"
      direction="column"
    >
      {bookList}
    </Box>
  )
}
const SearchInput = ({ search }) => (
  <Box
    align="center"
    justify="center"
    width="large"
    direction="row"
    align="center"
    margin="medium"
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
      author: "Must Read Summaries",
      title: "The Lean Startup  Eric Ries",
      provider: "Amazonas E4",
      price: "20.00",
      features: ["paperWhite", "new"],
    },
    {
      author: "Instaread",
      title: "Summary of The Lean Startup",
      provider: "Amazonas B1",
      price: "10.00",
      features: ["paperWhite", "used"],
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
