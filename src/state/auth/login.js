import { getStandardRequestFor } from "../standard-request"
import { authStandardOptions } from "./standard-options"
import { ajax } from "rxjs/ajax"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "LOGIN",
  authStandardOptions
)

export const [login, loginSuccessFully] = actionCreators

export { reducer }

export const loginEpic = epicFrom(payload =>
  ajax.post("http://localhost:3000/auth/login", payload)
)
