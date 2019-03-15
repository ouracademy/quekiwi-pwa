import React from "react"
import { Box, Heading, Text } from "grommet"
export const Books = ({ books, onChooseBook }) => (
  <Box justify="center" pad="small" gap="small" direction="column">
    {books.map((book, index) => (
      <Book key={"key" + index} {...book} onChooseBook={onChooseBook} />
    ))}
  </Box>
)

const Book = ({ id, title, authors = [], onChooseBook }) => (
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
