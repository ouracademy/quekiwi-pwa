import { getStandardRequestFor } from "../../standard-request"
import { authStandardOptions } from "../standard-options"

const { actionCreators, reducer, epicFrom } = getStandardRequestFor(
  "LOGIN",
  authStandardOptions
)

export const [login, loginSuccessFully] = actionCreators

export { reducer, epicFrom }
