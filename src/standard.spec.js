import { standardReducer } from "./state/standard"

describe("reducer", () => {
  const reducer = standardReducer(["REQUESTED", "SUCCESSFULLY", "FAILED"])

  test("on requested", () => {
    const state = reducer(
      { loading: false, error: "Some error" },
      { type: "REQUESTED" }
    )
    expect(state.loading).toBeTruthy()
    expect(state.error).toEqual(null)
  })

  test("on failed", () => {
    const state = reducer(
      { loading: true, error: null },
      { type: "FAILED", payload: "Some super duper error" }
    )
    expect(state.loading).toBeFalsy()
    expect(state.error).toEqual("Some super duper error")
  })

  it("other action type return the same state", () => {
    const state = reducer(
      { loading: false, error: null, user: "Arthur" },
      { type: "UNRECOGNIZED_ACTION", payload: {} }
    )
    expect(state).toEqual({ loading: false, error: null, user: "Arthur" })
  })
})
