import React, { createRef, Component } from "react"
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

export class SearchInput extends Component {
  state = { value: "", suggestionOpen: false, suggested: [] }

  boxRef = createRef()

  onChange = event => {
    const searchText = event.target.value

    if (!searchText.trim()) {
      this.setState({ suggested: [] })
    } else {
      // simulate an async call to the backend
      setTimeout(() => this.setState({ suggested: search(searchText) }), 300)
    }

    this.setState({ value: searchText })
  }

  onSelect = event => this.setState({ value: event.suggestion.value })
  renderSuggestions = () => {
    const { suggested } = this.state

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

  setSuggestionOpen = value => {
    this.setState({ suggestionOpen: value })
  }

  render() {
    const { suggestionOpen, value } = this.state
    return (
      <Box
        ref={this.boxRef}
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
          dropTarget={this.boxRef.current}
          plain
          value={value}
          onChange={this.onChange}
          onSelect={this.onSelect}
          suggestions={this.renderSuggestions()}
          placeholder="Escribe un libro a buscar..."
          onSuggestionsOpen={() => this.setSuggestionOpen(true)}
          onSuggestionsClose={() => this.setSuggestionOpen(false)}
        />
      </Box>
    )
  }
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
