import { getStandardRequestFor } from "../standard-request"
import { authStandardOptions } from "./standard-options"
import { api } from "../standard-request/api"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "LOGIN",
  authStandardOptions
)

export const [login, loginSuccessFully] = actionCreators

export { reducer }

export const loginEpic = epicFrom(api.post("auth/login"))
