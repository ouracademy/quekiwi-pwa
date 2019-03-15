import reduceReducers from "reduce-reducers"
import { initialState } from "./initial-state"
import { reducer as addCopyReducer } from "./add-copy"
import { reducer as deleteCopyReducer } from "./delete-copy"
import { reducer as editCopyReducer } from "./edit-copy"
import { reducer as getBooksReducer } from "./get-books"

const initialReducer = (prevState = initialState, action) => {
  const { type } = action

  switch (type) {
    case "BOOK_COPIES_REQUESTED":
      return prevState
    default:
      return prevState
  }
}

export const books = reduceReducers(
  initialReducer,
  addCopyReducer,
  deleteCopyReducer,
  editCopyReducer,
  getBooksReducer,
  initialState
)
