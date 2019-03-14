export const getBookCopies = query => ({
  type: "BOOK_COPIES_REQUESTED",
  payload: query,
})

export const saveBookCopie = data => ({
  type: "BOOK_COPIES_SAVED",
  payload: data,
})
