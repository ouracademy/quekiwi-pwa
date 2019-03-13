import { getStandardRequestFor } from "../standard-request"
import { authStandardOptions } from "./standard-options"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "SIGN_UP",
  authStandardOptions
)

export const [signUp] = actionCreators

export { reducer }
export const signUpEpic = epicFrom("http://localhost:3000/auth/signup")
