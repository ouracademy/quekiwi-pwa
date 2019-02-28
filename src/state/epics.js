import { combineEpics } from "redux-observable"
import { loginEpic } from "./login/epics"
import { signUpEpic } from "./sign-up/epics"

export const rootEpic = combineEpics(loginEpic, signUpEpic)
