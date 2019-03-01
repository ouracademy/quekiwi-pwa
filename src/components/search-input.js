import React from "react"
import { Search } from "grommet-icons"
import { Box, TextInput } from "grommet"

export const SearchInput = ({ search }) => (
  <Box
    align="center"
    justify="center"
    width="large"
    direction="row"
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
      placeholder="Escribe un libro a buscar..."
    />
  </Box>
)
