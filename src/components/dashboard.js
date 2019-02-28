import React, { useState } from "react"
import { Box, TextInput, Heading, Anchor } from "grommet"
import { Search } from "grommet-icons"
import SEO from "./seo"

const SearchResult = ({ books }) => {
  const bookList = books.map(({ id, title, provider, price, unit }, index) => (
    <Anchor href={`book/${id}`} key={index}>
      {" "}
      <Box
        pad="medium"
        direction="column"
        width="large"
        height="small"
        elevation="small"
      >
        <Heading color="neutral-1" level={5}>
          {title}
        </Heading>
        <Box direction="row">
          <span> {unit}</span>
          <Heading color="neutral-1" level={2}>
            {price}
          </Heading>
        </Box>
        <Box round="medium">{provider}</Box>
      </Box>
    </Anchor>
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

export const DashBoard = () => {
  const allBooks = [
    {
      id: 1,
      author: "Must Read Summaries",
      title: "The Lean Startup  Eric Ries",
      provider: "Amazonas E4",
      price: "20.00",
      unit: "S/",
      features: ["paperWhite", "new"],
    },
    {
      id: 2,
      author: "Instaread",
      title: "Summary of The Lean Startup",
      provider: "Amazonas B1",
      price: "10.00",
      unit: "S/",
      features: ["paperWhite", "used"],
    },
  ]

  const [books, setBooks] = useState([])

  const search = ({ target }) => {
    setBooks(allBooks.filter(book => book.title.startsWith(target.value)))
  }

  return (
    <>
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
    </>
  )
}
