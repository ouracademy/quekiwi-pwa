import { getStandardRequestFor } from "../standard-request"
import { initialState } from "./initial-state"
import { authApi } from "../standard-request/api"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "ADD_BOOK_COPY",
  {
    getInitialState: () => initialState,
    stateOnSuccess: (payload, prevState) => ({
      bookCopies: [...prevState.bookCopies, payload],
    }),
  }
)

export const [addBookCopy] = actionCreators

export { reducer }

export const addBookCopyEpic = epicFrom(authApi.post("book-copies"))
