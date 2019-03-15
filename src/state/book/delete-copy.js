import { getStandardRequestFor } from "../standard-request"

import { initialState } from "./initial-state"
import { authApi } from "../standard-request/api"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "DELETE_BOOK_COPY",
  {
    getInitialState: () => initialState,
    stateOnSuccess: (payload, prevState) => {
      return {
        ...prevState,
        bookCopies: prevState.bookCopies.filter(book => book.id !== payload.id),
      }
    },
  }
)

export const [deleteBookCopy] = actionCreators

export { reducer }

export const deleteBookCopyEpic = epicFrom(authApi.delete(`book-copies`))
