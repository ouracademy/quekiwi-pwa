import { combineEpics } from "redux-observable"
import { loginEpic } from "./login/epics"

export const rootEpic = combineEpics(loginEpic)
