import PropTypes from "prop-types"
import React from "react"
import { Box, Anchor, Button, ResponsiveContext, Text, Menu } from "grommet"
import { Grow } from "grommet-icons"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import { logout } from "../state/auth/logout"

const Header = ({ siteTitle, logged, logout }) => (
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
            onClick={() => navigate("/")}
            icon={<Grow size="large" />}
            label={size !== "small" && <Text size="xlarge">{siteTitle}</Text>}
          />
          <Actions logged={logged} logout={logout} />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  </header>
)

const Actions = ({ logged, logout }) => (
  <div>
    {logged ? (
      <Menu
        label="Bienvenido :)"
        items={[
          {
            label: "Salir",
            onClick: () => {
              logout()
              navigate("/")
            },
          },
        ]}
      />
    ) : (
      <Box direction="row" gap="small">
        <RoundedButton text="Ingresar" href="/login" />
        <RoundedButton text="Registrate" href="/sign-up" color="light-2" />
      </Box>
    )}
  </div>
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

const mapStateToProps = ({ auth }) => ({
  logged: auth.logged,
})

export default connect(
  mapStateToProps,
  { logout }
)(Header)
