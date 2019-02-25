import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Facebook } from "grommet-icons"
import { Grommet, Box, Anchor, Image as Img } from "grommet"
import { hpe } from "grommet-theme-hpe"

const theme = hpe
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grommet theme={theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <Box direction="row-responsive" justify="between" align="end">
              <Box margin={{ vertical: "xlarge" }}>
                <Box direction="row" gap="small">
                  <Anchor
                    target="_blank"
                    a11yTitle="Siguenos en Facebook"
                    href="https://www.facebook.com/quekiwi/"
                    icon={<Facebook size="large" />}
                  />
                </Box>
                {/* 
          <p>¿Preguntas? Llama al 962-349-134.</p>
          Preguntas frecuentes
          Términos de uso
          Privacidad
          Contáctanos
          */}
              </Box>
              {/* <img src="https://v2.grommet.io/img/stak-hurrah.svg" /> */}
            </Box>
          </footer>
        </div>
      </Grommet>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
