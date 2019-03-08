import { logout, reducer } from "./logout"

describe("logout", () => {
  describe("action creator", () => {
    it("should create an action of type LOG_OUT", () => {
      const action = logout()
      expect(action.type).toEqual("LOG_OUT")
    })
  })

  describe("reducer", () => {
    const state = reducer(
      { logged: true, token: "super duper token" },
      { type: "LOG_OUT" }
    )

    it("should set logged as false", () => {
      expect(state.logged).toBeFalsy()
    })

    it("should set token to null", () => {
      expect(state.token).toEqual(null)
    })
  })
})
