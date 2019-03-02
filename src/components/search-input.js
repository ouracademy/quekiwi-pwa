import React, { useState, useRef } from "react"
import { Search } from "grommet-icons"
import { Box, TextInput, Text } from "grommet"

const books = [
  {
    name: "Alan Souza",
  },
  {
    name: "Bryan Jacquot",
  },
  {
    name: "Chris Carlozzi",
  },
  {
    name: "Eric Soderberg",
  },
  {
    name: "Marlon Parizzotto",
  },
  {
    name: "Tales Chaves",
  },
  {
    name: "Tracy Barmore",
  },
]

export const SearchInput = () => {
  const [value, setValue] = useState("")
  const [suggestionOpen, setSuggestionOpen] = useState(false)
  const [suggested, setSuggested] = useState([])

  const boxRef = useRef()

  const onChange = event => {
    const searchText = event.target.value

    setValue(searchText)
    if (!searchText.trim()) {
      setSuggested([])
    } else {
      // simulate an async call to the backend
      setTimeout(() => setSuggested(search(searchText)), 300)
    }
  }

  const onSelect = event => setValue(event.suggestion.value)

  const renderSuggestions = () => {
    return suggested.map(({ name }, index, list) => ({
      label: (
        <Box
          direction="row"
          align="center"
          gap="small"
          border={index < list.length - 1 ? "bottom" : undefined}
          pad="small"
        >
          <Text>{name}</Text>
        </Box>
      ),
      value: name,
    }))
  }

  return (
    <Box
      ref={boxRef}
      width="large"
      direction="row"
      align="center"
      pad={{ horizontal: "small", vertical: "xsmall" }}
      round="small"
      elevation={suggestionOpen ? "medium" : undefined}
      border={{
        side: "all",
        color: suggestionOpen ? "transparent" : "border",
      }}
      style={
        suggestionOpen
          ? {
              borderBottomLeftRadius: "0px",
              borderBottomRightRadius: "0px",
            }
          : undefined
      }
    >
      <Search color="brand" />

      <TextInput
        type="search"
        dropTarget={boxRef.current}
        plain
        value={value}
        onChange={onChange}
        onSelect={onSelect}
        suggestions={renderSuggestions()}
        placeholder="Escribe un libro a buscar..."
        onSuggestionsOpen={() => setSuggestionOpen(true)}
        onSuggestionsClose={() => setSuggestionOpen(false)}
      />
    </Box>
  )
}

function search(value) {
  return books.filter(
    ({ name }) => name.toLowerCase().indexOf(value.toLowerCase()) >= 0
  )
}
// justify="center"
// margin="medium"
// elevation="small"
// border={{
//   side: "all",
//   color: "border",
// }}
