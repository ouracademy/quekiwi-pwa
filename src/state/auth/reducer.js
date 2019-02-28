import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESSFULLY,
  LOGIN_FAILED,
} from "./login/actions"
import {
  SIGNUP_REQUESTED,
  SIGNUP_SUCCESSFULLY,
  SIGNUP_FAILED,
} from "./sign-up/actions"

export const auth = (
  state = { logged: false, loading: false, error: null, token: null },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN_REQUESTED:
    case SIGNUP_REQUESTED:
      return { loading: true, error: null }
    case LOGIN_SUCCESSFULLY:
    case SIGNUP_SUCCESSFULLY:
      return { loading: false, error: null, token: payload.token, logged: true }
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
      return { loading: false, error: payload }
    default:
      return state
  }
}
