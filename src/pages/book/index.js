import React from "react"
import Layout from "../../components/layout"

const IndexPage = ({}) => {
  const id = window.location.pathname

  return <Layout>Mostrar libro {id}</Layout>
}
export default IndexPage
