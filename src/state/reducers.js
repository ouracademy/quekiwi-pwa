import { combineReducers } from "redux"
import { auth } from "./auth/reducer"
import { books as book } from "./book/reducer"

export const rootReducer = combineReducers({ auth, book })
