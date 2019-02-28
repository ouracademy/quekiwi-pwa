import React from "react"
import Image from "./image"
import SEO from "./seo"
import { Box } from "grommet"

export const Home = () => (
  <>
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
  </>
)
