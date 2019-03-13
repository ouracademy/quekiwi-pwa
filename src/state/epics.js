import { combineEpics } from "redux-observable"
import { loginEpic } from "./auth/login"
import { signUpEpic } from "./auth/sign-up"

export const rootEpic = combineEpics(loginEpic, signUpEpic)
