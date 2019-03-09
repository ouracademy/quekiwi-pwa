import { getStandardRequestFor } from "../standard"
import { standardEpic } from "../standard-request/epic"

const { actionTypes, actionCreators, reducer } = getStandardRequestFor(
  "BOOK_ADDED",
  { onSuccess: "book" }
)
const [REQUESTED] = actionTypes
const [addBook, addSuccessFully, addFailed] = actionCreators
const addBookEpic = standardEpic(REQUESTED, addSuccessFully, addFailed)(
  "http://localhost:3000/books"
)

export { reducer, addBookEpic, addBook, addSuccessFully }
