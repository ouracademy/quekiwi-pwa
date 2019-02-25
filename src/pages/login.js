import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Box, Button, Form, FormField, Heading } from "grommet"
import { FormClock } from "grommet-icons"

const LoginPage = () => (
  <Box height="100vh" width="100vw" align="center" justify="center" pad="small">
    <SEO title="Login" keywords={[`login`, `quekiwi`, `libros`]} />
    <Heading level={5}>Ingresa a Quekiwi</Heading>
    <Box width="medium">
      <LoginForm />
      <Suggestion />
    </Box>
  </Box>
)

const LoginForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = ({ value }) => {
    setIsSubmitting(true)
    setTimeout(() => {
      console.log("Submit", value)
      setIsSubmitting(false)
    }, 2000)
  }
  const loginData = { name: "", email: "", repeatedEmail: "" }

  return (
    <Form onSubmit={submit} value={loginData}>
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
        {isSubmitting ? (
          <FormClock />
        ) : (
          <Button type="submit" fill label="Ingresar" primary />
        )}
      </Box>
    </Form>
  )
}

const Suggestion = () => (
  <p>
    <Link to="/sign-up">¿Aún no tengo cuenta?</Link> Pero deseo registrarme{" "}
    <span role="img" aria-label="feliz">
      🙂
    </span>
  </p>
)

export default LoginPage
