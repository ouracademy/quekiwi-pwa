import { actionsCreator } from "./actions"

describe("standardActionsCreator", () => {
  const [
    getSomething,
    getSomethingSuccessfully,
    getSomethingFailed,
  ] = actionsCreator(["REQUESTED", "SUCCESSFULLY", "FAILED"])

  test("getSomething", () => {
    expect(getSomething("anything like an id")).toEqual({
      type: "REQUESTED",
      payload: "anything like an id",
    })
  })

  test("getSomethingSuccessfully", () => {
    expect(
      getSomethingSuccessfully({ response: { id: "1", name: "a table" } })
    ).toEqual({
      type: "SUCCESSFULLY",
      payload: { id: "1", name: "a table" },
    })
  })

  describe("failedGetSomething", () => {
    it("should send a message on generic error", () => {
      expect(getSomethingFailed(new Error("Super dumpy error"))).toEqual({
        type: "FAILED",
        payload:
          "Ups algo salio mal, por favor recargue la página e inténtelo" +
          " de nuevo, si es que esto no funciona por favor escribanos",
      })
    })

    it("should send a message on server error response", () => {
      expect(
        getSomethingFailed({
          response: {
            // server responding with error, like sending an html 404 page,
            // in general any kind of no standardized error response
          },
        })
      ).toEqual({
        type: "FAILED",
        payload:
          "Ups algo salio mal, por favor recargue la página e inténtelo" +
          " de nuevo, si es que esto no funciona por favor escribanos",
      })
    })

    it("should send server's response message", () => {
      expect(
        getSomethingFailed({
          response: {
            message: "Invalid properties",
            errors: [], // a list of error validation properties
          },
        })
      ).toEqual({
        type: "FAILED",
        payload: "Invalid properties",
      })
    })
  })
})
