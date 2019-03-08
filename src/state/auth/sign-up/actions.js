import { getStandardRequestFor } from "../../standard"

const { actionTypes, actionCreators, reducer } = getStandardRequestFor("SIGNUP")

export const [SIGNUP_REQUESTED] = actionTypes
export const [signUp, signUpSuccessFully, signUpFailed] = actionCreators

export { reducer }
