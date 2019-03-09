import { reducer, addSuccessFully } from "./create-book"

test("reducer", () => {
  let state = reducer(undefined, { type: "INIT" })

  expect(state).toHaveProperty("book")

  state = reducer(
    state,
    addSuccessFully({ response: { id: "1", title: "The little prince" } })
  )

  expect(state.book).toEqual({ id: "1", title: "The little prince" })
})
