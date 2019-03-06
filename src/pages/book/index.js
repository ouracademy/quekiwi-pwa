import React from "react"
import { Router } from "@reach/router"
import Layout from "../../components/layout"
import Step2 from "./step-2"
import { Step1 } from "./step-1"

export default () => {
  return (
    <Layout>
      <Router>
        <Root path="book">
          <Register path="register">
            <Step1 path="step-1" />
            <Step2 path="step-2" />
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
