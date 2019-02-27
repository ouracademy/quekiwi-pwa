import React from "react"
import renderer from "react-test-renderer"
import { Suggestion } from "./login"

describe("Suggestion", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Suggestion />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2)
})
