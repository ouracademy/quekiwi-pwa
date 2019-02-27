import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Box, Button, Form, FormField, Heading } from "grommet"
import { FormClock } from "grommet-icons"
import { connect } from "react-redux"
import { login } from "../state/actions"

const LoginPage = ({ dispatch }) => (
  <Box height="100vh" width="100vw" align="center" justify="center" pad="small">
    <SEO title="Login" keywords={[`login`, `quekiwi`, `libros`]} />
    <Heading level={4}>Ingresa a Quekiwi</Heading>
    <Box width="medium">
      <LoginForm dispatch={dispatch} />
      <Suggestion />
    </Box>
  </Box>
)

const LoginForm = ({ dispatch }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = ({ value }) => {
    setIsSubmitting(true)
    dispatch(login(value))
    setIsSubmitting(false)
  }
  const loginData = { name: "", email: "" }

  return (
    <Form onSubmit={submit} value={loginData}>
      <FormField label="Correo" name="email" required type="email" />
      <FormField label="Contraseña" required name="password" type="password" />
      <Box direction="row" justify="center" margin={{ top: "medium" }}>
        {isSubmitting ? (
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

export default connect()(LoginPage)
