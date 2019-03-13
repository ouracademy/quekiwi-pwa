import { getStandardRequestFor } from "../../standard-request"
import { authStandardOptions } from "../standard-options"

const { actionTypes, actionCreators, reducer } = getStandardRequestFor(
  "SIGNUP",
  authStandardOptions
)

export const [SIGN_UP_REQUESTED] = actionTypes
export const [signUp, signUpSuccessFully, signUpFailed] = actionCreators

export { reducer }
