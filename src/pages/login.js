import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Box, Button, Form, FormField, Heading } from "grommet"
import { FormClock } from "grommet-icons"
import { navigate } from "gatsby"
import { toast } from "react-toastify"

const axios = require("axios")

const LoginPage = () => (
  <Box height="100vh" width="100vw" align="center" justify="center" pad="small">
    <SEO title="Login" keywords={[`login`, `quekiwi`, `libros`]} />
    <Heading level={4}>Ingresa a Quekiwi</Heading>
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
    axios
      .post("/auth/login", value)
      .then(response => {
        window.localStorage.setItem("token", response.data.token)
        setIsSubmitting(false)
        navigate("/main")
      })
      .catch(error => {
        if (error.response) {
          const dataError = error.response.data
          toast.error(dataError.message || "Ups, ocurrio un error")
        }
        setIsSubmitting(false)
      })
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

const Suggestion = () => (
  <p>
    <Link to="/sign-up">¿Aún no tengo cuenta?</Link> Pero deseo registrarme{" "}
    <span role="img" aria-label="feliz">
      🙂
    </span>
  </p>
)

export default LoginPage
