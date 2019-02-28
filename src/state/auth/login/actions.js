export const LOGIN_REQUESTED = "LOGIN"
export const LOGIN_SUCCESSFULLY = "LOGIN_SUCCESSFULLY"
export const LOGIN_FAILED = "LOGIN_FAILED"

export const login = credentials => ({
  type: LOGIN_REQUESTED,
  payload: credentials,
})

export const loginSuccessFully = ({ response }) => ({
  type: LOGIN_SUCCESSFULLY,
  payload: {
    token: response.token,
  },
})
