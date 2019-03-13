import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import { Box, Button, Form, FormField, Heading } from "grommet"
import { FormClock } from "grommet-icons"
import { connect } from "react-redux"
import { toast } from "react-toastify"

import SEO from "../components/seo"
import { login } from "../state/auth/login"

const LoginPage = ({ login, loading, logged, error }) => {
  useEffect(() => {
    if (logged) navigate("/")
  })

  useEffect(() => {
    if (error) toast.error(error)
  })

  return (
    <Box
      height="100vh"
      width="100vw"
      align="center"
      justify="center"
      pad="small"
    >
      <SEO title="Login" keywords={[`login`, `quekiwi`, `libros`]} />
      <Heading level={4}>Ingresa a Quekiwi</Heading>
      <Box width="medium">
        <LoginForm login={login} loading={loading} />
        <Suggestion />
      </Box>
    </Box>
  )
}

const LoginForm = ({ login, loading }) => {
  const submit = ({ value }) => {
    login(value)
  }

  return (
    <Form onSubmit={submit}>
      <FormField label="Correo" name="email" required type="email" />
      <FormField label="Contraseña" required name="password" type="password" />
      <Box direction="row" justify="center" margin={{ top: "medium" }}>
        {loading ? (
          <FormClock />
        ) : (
          <Button type="submit" fill label="Ingresar" primary />
        )}
      </Box>
    </Form>
  )
}

export const Suggestion = () => (
  <p>
    <Link to="/sign-up">¿Aún no tengo cuenta?</Link> Pero deseo registrarme{" "}
    <span role="img" aria-label="feliz">
      🙂
    </span>
  </p>
)

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
  logged: auth.logged,
})

export default connect(
  mapStateToProps,
  { login }
)(LoginPage)
