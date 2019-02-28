export const logout = () => ({
  type: "LOG_OUT",
})

export const reducer = (prevState, action) => {
  if (action.type === "LOG_OUT") {
    return {
      ...prevState,
      logged: false,
      token: null,
    }
  }
  return prevState
}
