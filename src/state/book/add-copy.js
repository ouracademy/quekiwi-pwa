import { getStandardRequestFor } from "../standard-request"
import { initialState } from "./initial-state"
import { ajax } from "rxjs/ajax"

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

export const addBookCopyEpic = epicFrom((payload, auth) =>
  ajax.post("http://localhost:3000/book-copies", payload, {
    Authorization: `Bearer ${auth.token}`,
  })
)
