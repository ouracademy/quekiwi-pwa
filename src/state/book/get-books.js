import { getStandardRequestFor } from "../standard-request"
import { initialState } from "./initial-state"
import { authApi } from "../standard-request/api"

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

export const getBooksEpic = epicFrom(authApi.get("books"))
