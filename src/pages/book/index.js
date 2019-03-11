import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import { AddBookCopies } from "./add-book-copies"
import { Search } from "./search"
import { AddNewBook } from "./new"

export default () => {
  return (
    <Layout>
      <Router>
        <Root path="book">
          <Register path="register">
            <Search path="search" />
            <AddNewBook path="new" />
            <AddBookCopies path="/:id/copies" />
          </Register>
          <BookDetail path=":id" />
        </Root>
      </Router>
    </Layout>
  )
}

const Register = ({ children }) => (
  <div>
    <h1>Registra tus libros :)</h1>
    {children}
  </div>
)

const Root = ({ children }) => <div>{children}</div>

const BookDetail = ({ id }) => (
  <div>Estas en el detalle del libro {id} ohhh</div>
)
