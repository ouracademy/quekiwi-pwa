import { getStandardRequestFor } from "../standard-request"
import { authStandardOptions } from "./standard-options"
import { api } from "../standard-request/api"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "SIGN_UP",
  authStandardOptions
)

export const [signUp] = actionCreators

export { reducer }
export const signUpEpic = epicFrom(api.post("auth/signup"))
