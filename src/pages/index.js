import React from "react"

import Layout from "../components/layout"
import { connect } from "react-redux"
import { Home } from "../components/home"
import { DashBoard } from "../components/dashboard"

const IndexPage = ({ logged }) => (
  <Layout>{logged ? <DashBoard /> : <Home />}</Layout>
)

const mapStateToProps = ({ auth: { logged } }) => ({ logged })

export default connect(
  mapStateToProps,
  null
)(IndexPage)
