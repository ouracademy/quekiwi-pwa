import { navigate } from "gatsby"
import { toast } from "react-toastify"
const axios = require("axios")
const initialState = {}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "LOGIN":
      axios
        .post("/auth/login", payload)
        .then(response => {
          window.localStorage.setItem("token", response.data.token)
          navigate("/main")
        })
        .catch(error => {
          if (error.response) {
            const dataError = error.response.data
            toast.error(dataError.message || "Ups, ocurrio un error")
          }
        })
      return state
    default:
      return state
  }
}
