import { getStandardRequestFor } from "../../standard-request"
import { authStandardOptions } from "../standard-options"

const { actionTypes, actionCreators, reducer } = getStandardRequestFor(
  "LOGIN",
  authStandardOptions
)

export const [LOGIN_REQUESTED] = actionTypes
export const [login, loginSuccessFully, loginFailed] = actionCreators

export { reducer }
