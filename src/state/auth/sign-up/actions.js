import { getStandardFor } from "../../standard"

const { actionTypes, actionCreators, reducer } = getStandardFor("SIGNUP")

export const [SIGNUP_REQUESTED] = actionTypes
export const [signUp, signUpSuccessFully, signUpFailed] = actionCreators

export { reducer }
