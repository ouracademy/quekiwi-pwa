import { SIGNUP, SIGNUP_FAILED, SIGNUP_SUCCESSFULLY } from "./actions"

export const signUp = (
  state = { logged: false, loading: false, error: null, token: null },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case SIGNUP:
      return { loading: true, error: null }
    case SIGNUP_SUCCESSFULLY:
      return { loading: false, error: null, token: payload.token, logged: true }
    case SIGNUP_FAILED:
      return { loading: false, error: payload }
    default:
      return state
  }
}
