import React, { useState, useRef } from "react"
import { Search } from "grommet-icons"
import { Box, TextInput, Text } from "grommet"

import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap,
} from "rxjs/operators"
import { useEventCallback } from "rxjs-hooks"
import { of } from "rxjs"

export const SearchInput = ({ onChoose, suggestionsFor }) => {
  const [value, setValue] = useState("")
  const [suggestionOpen, setSuggestionOpen] = useState(false)

  const boxRef = useRef()

  const [onChange, suggestions] = useEventCallback(
    event$ =>
      event$.pipe(
        map(event => event.target.value),
        tap(searchText => {
          setValue(searchText)
        }),
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(searchText => search(searchText, suggestionsFor))
      ),
    []
  )

  const onSelect = event => {
    const searchText = event.suggestion.value
    setValue(searchText)
    onChoose(searchText)
  }

  const onKeyEnter = event => {
    if (value) {
      onChoose(value)
    }
  }

  const renderSuggestions = () => {
    return suggestions.map(({ name }, index, list) => ({
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
        onKeyPress={e => {
          if (e.key === "Enter") onKeyEnter(e)
        }}
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

const search = (term = "", suggestionsFor) => {
  const searchText = term.trim()
  return searchText ? suggestionsFor(searchText) : of([])
}
