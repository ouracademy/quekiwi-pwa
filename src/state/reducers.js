import { combineReducers } from "redux"
import { loginReducer } from "./login/reducer"
import { signUp } from "./sign-up/reducer"

export const rootReducer = combineReducers({
  user: loginReducer,
  signUp,
})
