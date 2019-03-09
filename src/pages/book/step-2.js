import React from "react"
import { connect } from "react-redux"
import { Heading } from "grommet"
import BookCopies from "../../components/book/book-copies"
import { getBookCopies, addBook } from "../../state/book/actions"

const Step2 = ({ book, getBookCopies }) => {
  getBookCopies({ id: book.id })

  return (
    <div>
      <Heading color="neutral-1" level={3}>
        Agrega tus ejemplares del libro {book.title}
      </Heading>
      <BookCopies />
    </div>
  )
}

const mapStateToProps = ({ book }) => ({ book: book.book })
export default connect(
  mapStateToProps,
  { getBookCopies, addBook }
)(Step2)
