import { combineReducers } from "redux"
import { auth } from "./auth/reducer"
import { reducer as book } from "./book/reducer"

export const rootReducer = combineReducers({ auth, book })
