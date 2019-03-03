export const addBook = book => ({
  type: "BOOK_ADDED",
  payload: book,
})
export const getBookCopies = query => ({
  type: "BOOK_COPIES_REQUESTED",
  payload: query,
})

export const addBookCopie = data => ({
  type: "BOOK_COPIES_ADDED",
  payload: data,
})

export const saveBookCopie = data => ({
  type: "BOOK_COPIES_SAVED",
  payload: data,
})
export const deleteBookCopie = id => ({
  type: "BOOK_COPIES_DELETED",
  payload: id,
})
