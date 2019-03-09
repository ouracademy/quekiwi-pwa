import { reducer, loginSuccessFully } from "./actions"

test("reducer", () => {
  let state = reducer(undefined, { type: "INIT" })

  expect(state).toEqual({
    error: null,
    loading: false,
    logged: false,
    token: null,
  })

  state = reducer(
    state,
    loginSuccessFully({ response: { token: "super token" } })
  )

  expect(state.token).toEqual("super token")
  expect(state.logged).toBeTruthy()
})
