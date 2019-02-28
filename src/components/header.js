import PropTypes from "prop-types"
import React from "react"
import { Box, Anchor, Button, ResponsiveContext, Text } from "grommet"
import { Grow } from "grommet-icons"
import { navigate } from "gatsby"

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
          <Actions />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </header>
)

const Actions = () => (
  <Box direction="row" gap="small">
    <RoundedButton text="Ingresar" href="/login" />
    <RoundedButton text="Registrate" href="/sign-up" color="light-2" />
  </Box>
)

const RoundedButton = ({ text, href, color = "brand" }) => (
  <Button onClick={() => navigate(href)} plain>
    <Box
      pad={{ vertical: "small", horizontal: "medium" }}
      round="xlarge"
      background={color}
    >
      <Text>{text}</Text>
    </Box>
  </Button>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
