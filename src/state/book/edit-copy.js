import { getStandardRequestFor } from "../standard-request"
import { initialState } from "./initial-state"
import { authApi } from "../standard-request/api"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "EDIT_BOOK_COPY",
  {
    getInitialState: () => initialState,
    stateOnSuccess: (payload, prevState) => {
      const newBookCopies = prevState.bookCopies.map(book => {
        if (+payload.id === book.id) {
          book = payload
        }
        return book
      })

      return {
        ...prevState,
        bookCopies: newBookCopies,
      }
    },
  }
)

export const [editBookCopy] = actionCreators

export { reducer }

export const editBookCopyEpic = epicFrom(authApi.patch("book-copies"))
