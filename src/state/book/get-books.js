import { getStandardRequestFor } from "../standard-request"
import { initialState } from "./initial-state"
import { ajax } from "rxjs/ajax"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "GET_BOOKS",
  {
    getInitialState: () => initialState,
    stateOnSuccess: (payload, prevState) => ({
      ...prevState,
      books: payload,
    }),
  }
)

export const [getBooks] = actionCreators

export { reducer }

export const getBooksEpic = epicFrom((payload, auth) =>
  ajax.get("http://localhost:3000/books", payload, {
    Authorization: `Bearer ${auth.token}`,
  })
)
