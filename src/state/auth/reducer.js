import reduceReducers from "reduce-reducers"
import { reducer as loginReducer } from "./login"
import { reducer as logoutReducer } from "./logout"
import { reducer as signUpReducer } from "./sign-up"
import { getInitialState } from "../standard-request"
import { authStandardOptions } from "./standard-options"

export const auth = reduceReducers(
  loginReducer,
  logoutReducer,
  signUpReducer,
  getInitialState(authStandardOptions)
)
