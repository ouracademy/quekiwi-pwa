import reduceReducers from "reduce-reducers"
import { initialState, reducer as addCopyReducer } from "./add-copy"

const initialReducer = (prevState = { book: {}, bookCopies: [] }, action) => {
  const { type } = action

  switch (type) {
    case "BOOK_COPIES_REQUESTED":
      return prevState
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
    default:
      return prevState
  }
}

export const books = reduceReducers(
  initialReducer,
  addCopyReducer,
  initialState
)
