import React from "react"

import Layout from "../components/layout"
import { connect } from "react-redux"
import { Home } from "../components/home"
import { Link } from "gatsby"

const IndexPage = ({ logged }) => (
  <Layout>{logged ? <DashBoard /> : <Home />}</Layout>
)

const DashBoard = () => (
  <div>
    <h1>Mis libros</h1>
    <Link to="/book/register/search">Agregar un nuevo libro</Link>
    <Link to="/book/list">Ver mis libros</Link>
    {/* TODO: search my books */}
  </div>
)

const mapStateToProps = ({ auth: { logged } }) => ({ logged })

export default connect(
  mapStateToProps,
  null
)(IndexPage)
