import { getStandardFor } from "../../standard"

const { actionTypes, actionCreators, reducer } = getStandardFor("LOGIN")

export const [LOGIN_REQUESTED] = actionTypes
export const [login, loginSuccessFully, loginFailed] = actionCreators

export { reducer }
