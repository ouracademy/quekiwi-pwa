import { getStandardRequestFor } from "../standard-request"
import { authStandardOptions } from "./standard-options"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "LOGIN",
  authStandardOptions
)

export const [login, loginSuccessFully] = actionCreators

export { reducer }

export const loginEpic = epicFrom("http://localhost:3000/auth/login")
