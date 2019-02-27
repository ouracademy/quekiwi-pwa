import { LOGIN, LOGIN_SUCCESSFULLY, LOGIN_FAILED } from "./actions"

export const loginReducer = (
  state = { logged: false, loading: false, error: null, token: null },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case LOGIN:
      return { loading: true, error: null }
    case LOGIN_SUCCESSFULLY:
      return { loading: false, error: null, token: payload.token, logged: true }
    case LOGIN_FAILED:
      return { loading: false, error: payload }
    default:
      return state
  }
}
