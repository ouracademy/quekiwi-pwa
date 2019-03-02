export const reducer = (prevState, action) => {
  if (action.type === "BOOK_COPIES_REQUESTED") {
    return {
      data: prevState.data,
    }
  }
  if (action.type === "BOOK_COPIES_ADDED") {
    return {
      data: [...prevState.data, action.payload],
    }
  }
  if (action.type === "BOOK_COPIES_SAVED") {
    const index = prevState.data.findIndex(
      book => (action.payload.id = book.id)
    )
    prevState.data = prevState.data.map((book, i) => {
      if (index === i) {
        book = action.payload
      }
      return book
    })
    return {
      data: prevState.data,
    }
  }

  if (action.type === "BOOK_COPIES_DELETED") {
    return {
      data: prevState.data.filter(book => book.id !== action.payload),
    }
  }

  return { data: [] }
}
