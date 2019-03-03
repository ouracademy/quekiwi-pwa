export const reducer = (prevState = { book: {}, bookCopies: [] }, action) => {
  const { type } = action

  switch (type) {
    case "BOOK_COPIES_REQUESTED":
      return prevState
    case "BOOK_COPIES_ADDED":
      return {
        ...prevState,
        bookCopies: [...prevState.bookCopies, action.payload],
      }
    case "BOOK_COPIES_SAVED":
      const newData = prevState.bookCopies.map(book => {
        if (action.payload.id === book.id) {
          book = action.payload
        }
        return book
      })

      return {
        ...prevState,
        bookCopies: newData,
      }
    case "BOOK_COPIES_DELETED":
      return {
        ...prevState,
        bookCopies: prevState.bookCopies.filter(
          book => book.id !== action.payload
        ),
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
