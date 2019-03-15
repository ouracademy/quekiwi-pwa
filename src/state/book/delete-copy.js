import { getStandardRequestFor } from "../standard-request"

import { initialState } from "./initial-state"
import { ajax } from "rxjs/ajax"

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

export const deleteBookCopyEpic = epicFrom((payload, auth) => {
  return ajax.delete(`http://localhost:3000/book-copies/${payload.id}`, {
    Authorization: `Bearer ${auth.token}`,
  })
})
