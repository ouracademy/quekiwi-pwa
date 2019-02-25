import PropTypes from "prop-types"
import React from "react"
import { Box, Anchor, Button, ResponsiveContext, Text } from "grommet"
import { Grow } from "grommet-icons"

const Header = ({ siteTitle }) => (
  <header>
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          fill
          pad="medium"
          direction="row"
          justify="between"
          align="center"
          alignSelf="center"
          gap="medium"
        >
          <Anchor
            href="/"
            icon={<Grow size="large" />}
            label={size !== "small" && <Text size="xlarge">{siteTitle}</Text>}
          />

          <Button href="/login" plain>
            <Box
              pad={{ vertical: "small", horizontal: "medium" }}
              round="xlarge"
              background="accent-1"
            >
              <Text>Ingresar</Text>
            </Box>
          </Button>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
