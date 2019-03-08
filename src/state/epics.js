import { combineEpics } from "redux-observable"
import { loginEpic } from "./auth/login/epics"
import { signUpEpic } from "./auth/sign-up/epics"
import { addBookEpic } from "./book/epics"

export const rootEpic = combineEpics(loginEpic, signUpEpic, addBookEpic)
