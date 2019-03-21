export const getBookCopies = query => ({
  type: "BOOK_COPIES_REQUESTED",
  payload: query,
})
