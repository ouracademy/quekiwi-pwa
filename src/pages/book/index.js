import React from "react"
import { Router, Link, navigate } from "@reach/router"
import Layout from "../../components/layout"
import Step2 from "./step-2"
import { SearchBooks } from "../../components/book/search"
import { Box } from "grommet"

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

const Step1 = () => (
  <div>
    <Box direction="row" justify="between">
      <h3>1. Busca tu libro</h3>
      <div>
        ¿No lo encontraste?{" "}
        <Link to="/book/register/step-2">Registralo aquí</Link>
      </div>
    </Box>
    <SearchBooks
      onChooseBook={id => navigate(`/book/register/step-2?id=${id}`)}
    />
  </div>
)

const Root = ({ children }) => <div>{children}</div>

const BookDetail = ({ id }) => (
  <div>Estas en el detalle del libro {id} ohhh</div>
)
