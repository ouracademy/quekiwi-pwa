import { getStandardRequestFor } from "../standard-request"

export const initialState = { book: {}, bookCopies: [] }

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

// FIXME: please put me a real url! 🙁
export const addBookCopyEpic = epicFrom("http://localhost:3000/")
