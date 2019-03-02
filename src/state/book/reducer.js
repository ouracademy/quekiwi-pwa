export const reducer = (prevState = { book: {}, data: [] }, action) => {
  const { type } = action

  switch (type) {
    case "BOOK_COPIES_REQUESTED":
      return prevState
    case "BOOK_COPIES_ADDED":
      return {
        ...prevState,
        data: [...prevState.data, action.payload],
      }
    case "BOOK_COPIES_SAVED":
      const newData = prevState.data.map(book => {
        if (action.payload.id === book.id) {
          book = action.payload
        }
        return book
      })

      return {
        ...prevState,
        data: newData,
      }
    case "BOOK_COPIES_DELETED":
      return {
        ...prevState,
        data: prevState.data.filter(book => book.id !== action.payload),
      }
    case "BOOK_ADDED":
      return {
        ...prevState,
        book: action.payload,
      }
    default:
      return prevState
  }
}
