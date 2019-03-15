import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Heading } from "grommet"
import BookCopies from "../../components/book/book-copies"
import { getBookCopies } from "../../state/book/actions"

import { pluck } from "rxjs/operators"
import { api } from "../../state/standard-request/api"

const FormAddBookCopies = ({ id, getBookCopies }) => {
  const [book, setBook] = useState(null)

  useEffect(() => {
    const $book = getBook(id).subscribe({
      next: setBook,
    })

    getBookCopies({ id })
    return () => $book.unsubscribe()
  }, [id, getBookCopies])

  return (
    <div>
      {book ? (
        <div>
          <Heading color="neutral-1" level={3}>
            Mis ejemplares del libro {book.title}
          </Heading>
          <BookCopies bookId={id} />
        </div>
      ) : (
        <div>Cargando</div>
      )}
    </div>
  )
}

const getBook = id => {
  return api
    .get(`books/short-info/${id}`)()
    .pipe(pluck("response"))
}

export const AddBookCopies = connect(
  null,
  { getBookCopies }
)(FormAddBookCopies)
