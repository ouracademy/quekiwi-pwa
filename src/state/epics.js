import { combineEpics } from "redux-observable"
import { loginEpic } from "./auth/login"
import { signUpEpic } from "./auth/sign-up"
import { addBookCopyEpic } from "./book/add-copy"
import { deleteBookCopyEpic } from "./book/delete-copy"

export const rootEpic = combineEpics(
  loginEpic,
  signUpEpic,
  addBookCopyEpic,
  deleteBookCopyEpic
)
