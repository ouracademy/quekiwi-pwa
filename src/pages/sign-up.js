import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import { toast } from "react-toastify"
import { Box, Button, Form, FormField, Heading } from "grommet"
import { FormClock } from "grommet-icons"
import { connect } from "react-redux"
import SEO from "../components/seo"
import { signUp } from "../state/auth/sign-up"

const SignupPage = ({ loading, logged, error, signUp }) => {
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
      <SEO title="Registrate" keywords={[`register`, `quekiwi`, `libros`]} />
      <Heading level={4}>Regístrate en Quekiwi</Heading>
      <Box width="medium">
        <RegisterForm signUp={signUp} loading={loading} />
        <Suggestion />
      </Box>
    </Box>
  )
}

const RegisterForm = ({ loading, signUp }) => {
  const submit = ({ value }) => {
    signUp(value)
  }

  return (
    <Form onSubmit={submit}>
      <FormField label="Nombre de usuario" name="name" required />
      <FormField label="Correo" name="email" required type="email" />
      <FormField
        name="repeatedEmail"
        required
        label="Escriba de nuevo su correo"
        type="email"
        validate={(repeatedEmail, form) =>
          form.email !== repeatedEmail && "Sus correos no coinciden"
        }
      />
      <FormField label="Contraseña" required name="password" type="password" />
      <Box direction="row" justify="center" margin={{ top: "medium" }}>
        {loading ? (
          <FormClock />
        ) : (
          <Button type="submit" fill label="Registrarme" primary />
        )}
      </Box>
    </Form>
  )
}

const Suggestion = () => (
  <p>
    <Link to="/login">¿Ya tengo una cuenta?</Link> Voy a loguearme{" "}
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
  { signUp }
)(SignupPage)
