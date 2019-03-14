import { getStandardRequestFor } from "../standard-request"

import { initialState } from "./initial-state"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "DELETE_BOOK_COPY",
  {
    getInitialState: () => initialState,
    stateOnSuccess: (payload, prevState) => {
      return {
        ...prevState,
        bookCopies: prevState.bookCopies.filter(book => book.id !== payload),
      }
    },
  }
)

export const [deleteBookCopy] = actionCreators

export { reducer }

// FIXME: please put me a real url! 🙁
export const deleteBookCopyEpic = epicFrom(
  "http://localhost:3000/book-copies/delete"
)
