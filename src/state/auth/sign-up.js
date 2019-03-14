import { getStandardRequestFor } from "../standard-request"
import { authStandardOptions } from "./standard-options"
import { ajax } from "rxjs/ajax"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "SIGN_UP",
  authStandardOptions
)

export const [signUp] = actionCreators

export { reducer }
export const signUpEpic = epicFrom(payload =>
  ajax.post("http://localhost:3000/auth/signup", payload)
)
