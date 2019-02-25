import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { Box, Button, Form, FormField, Heading, TextInput } from "grommet"

const LoginPage = () => (
  <div>
    <SEO title="Login" keywords={[`login`, `quekiwi`, `libros`]} />
    <Box fill align="center" justify="center" pad="small">
      <Heading level={5}>Ingresa a Quekiwi</Heading>
      <Box width="medium">
        <Form onSubmit={({ value }) => console.log("Submit", value)}>
          <FormField label="Correo" name="email" required type="email" />
          <FormField
            label="Escriba de nuevo su correo"
            name="repeatEmail"
            required
            type="email"
          />
          <FormField label="Contraseña" name="password" required>
            <TextInput type="password" />
          </FormField>
          <Box direction="row" justify="between" margin={{ top: "medium" }}>
            <Button type="submit" label="Ingresar" primary />
          </Box>
        </Form>
        <Suggestion />
      </Box>
    </Box>
  </div>
)

const Suggestion = () => (
  <p>
    <Link to="/sign-up">¿Aún no tengo cuenta?</Link> Pero deseo registrarme{" "}
    <span role="img" aria-label="feliz">
      🙂
    </span>
  </p>
)

export default LoginPage
