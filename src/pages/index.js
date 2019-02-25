import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Box, Button } from "grommet"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Box height="xlarge" fill align="center" justify="center" direction="row">
      <Box>
        <h1>Un lugar donde están </h1>
        <h1> los libros</h1>
      </Box>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Box>
  </Layout>
)

export default IndexPage
