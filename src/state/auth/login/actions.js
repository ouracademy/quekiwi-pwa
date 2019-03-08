import { getStandardRequestFor } from "../../standard"

const { actionTypes, actionCreators, reducer } = getStandardRequestFor("LOGIN")

export const [LOGIN_REQUESTED] = actionTypes
export const [login, loginSuccessFully, loginFailed] = actionCreators

export { reducer }
