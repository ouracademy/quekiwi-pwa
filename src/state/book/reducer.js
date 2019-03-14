import reduceReducers from "reduce-reducers"
import { initialState } from "./initial-state"
import { reducer as addCopyReducer } from "./add-copy"
import { reducer as deleteCopyReducer } from "./delete-copy"

const initialReducer = (prevState = initialState, action) => {
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
    default:
      return prevState
  }
}

export const books = reduceReducers(
  initialReducer,
  addCopyReducer,
  deleteCopyReducer,
  initialState
)
