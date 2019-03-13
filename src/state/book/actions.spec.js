import { getBookCopies } from "./actions"

test("getBookCopies", () => {
  expect(getBookCopies({ id: 1 })).toEqual({
    payload: { id: 1 },
    type: "BOOK_COPIES_REQUESTED",
  })
})
