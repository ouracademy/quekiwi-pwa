import reduceReducers from "reduce-reducers"
import { reducer as loginReducer } from "./login/actions"
import { reducer as logoutReducer } from "./logout"
import { reducer as signUpReducer } from "./sign-up/actions"
import { initialState } from "../standard-request"

export const auth = reduceReducers(
  loginReducer,
  logoutReducer,
  signUpReducer,
  initialState
)
