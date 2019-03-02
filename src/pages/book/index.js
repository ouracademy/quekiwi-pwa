import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import RegisterBook from "./register"

export default () => {
  return (
    <Layout>
      <Router>
        <RegisterBook path="/book/register" />
        <BookDetail path="/book/:id" />
      </Router>
    </Layout>
  )
}

const BookDetail = ({ id }) => (
  <div>Estas en el detalle del libro {id} ohhh</div>
)
