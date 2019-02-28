export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESSFULLY = "SIGNUP_SUCCESSFULLY"
export const SIGNUP_FAILED = "SIGNUP_FAILED"

export const signUp = user => ({
  type: SIGNUP,
  payload: user,
})

export const signupSuccessFully = ({ response }) => ({
  type: SIGNUP_SUCCESSFULLY,
  payload: {
    token: response.token,
  },
})
