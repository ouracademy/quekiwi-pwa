import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import RegisterBook from "./register"

export default () => {
  return (
    <Layout>
      <Router>
        <Root path="book">
          <RegisterBook path="register" />
          <BookDetail path=":id" />
        </Root>
      </Router>
    </Layout>
  )
}

const Root = ({ children }) => <div>{children}</div>

const BookDetail = ({ id }) => (
  <div>Estas en el detalle del libro {id} ohhh</div>
)
