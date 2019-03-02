export const reducer = (prevState, action) => {
  if (action.type === "BOOK_COPIES_REQUESTED") {
    return {
      ...prevState,
    }
  }
  if (action.type === "BOOK_COPIES_ADDED") {
    return {
      ...prevState,
      data: [...prevState.data, action.payload],
    }
  }
  if (action.type === "BOOK_COPIES_SAVED") {
    const index = prevState.data.findIndex(
      book => (action.payload.id = book.id)
    )
    const newData = prevState.data.map((book, i) => {
      if (index === i) {
        book = action.payload
      }
      return book
    })
    return {
      ...prevState,
      data: newData,
    }
  }

  if (action.type === "BOOK_COPIES_DELETED") {
    return {
      ...prevState,
      data: prevState.data.filter(book => book.id !== action.payload),
    }
  }
  if (action.type === "BOOK_ADDED") {
    return {
      ...prevState,
      book: action.payload,
    }
  }

  return { book: {}, data: [] }
}
