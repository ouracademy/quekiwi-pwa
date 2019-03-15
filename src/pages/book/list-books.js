import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Books } from "../../components/book/list"
import { getBooks } from "../../state/book/get-books"

const ListBooks = ({ getBooks, books = [] }) => {
  useEffect(() => {
    getBooks()
  }, [getBooks])
  const onChooseBook = book => {
    console.log("get book", book)
  }
  return (
    <div>
      <Books books={books} onChooseBook={onChooseBook} />
    </div>
  )
}

const mapStateToProps = ({ book }) => ({
  books: book.books,
})

export default connect(
  mapStateToProps,
  { getBooks }
)(ListBooks)
