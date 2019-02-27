import React, { useState } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Box, Button, Form, FormField, Heading } from "grommet"
import { FormClock } from "grommet-icons"
import { navigate } from "gatsby"
import { toast } from "react-toastify"
const axios = require("axios")

const SignupPage = () => (
  <Box height="100vh" width="100vw" align="center" justify="center" pad="small">
    <SEO title="Login" keywords={[`register`, `quekiwi`, `libros`]} />
    <Heading level={5}>Regístrate en Quekiwi</Heading>
    <Box width="medium">
      <RegisterForm />
      <Suggestion />
    </Box>
  </Box>
)

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = async ({ value }) => {
    setIsSubmitting(true)

    try {
      const { data } = await axios.post("/auth/signup", value)
      window.localStorage.setItem("token", data.token)
      navigate("/main")
    } catch (error) {
      if (error.response) {
        const dataError = error.response.data
        toast.error(dataError.message || "Ups, ocurrio un error")
      }
    } finally {
      setIsSubmitting(false)
    }
  }
  const signupData = { name: "", email: "", repeatedEmail: "" }

  return (
    <Form onSubmit={submit} value={signupData}>
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

export default SignupPage
