import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Books } from "../../components/book/list"
import { getBooks } from "../../state/book/get-books"
import { navigate } from "@reach/router"

const ListBooks = ({ getBooks, books = [] }) => {
  useEffect(() => {
    getBooks()
  }, [getBooks])
  const onChooseBook = id => {
    navigate(`/book/${id}`)
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
