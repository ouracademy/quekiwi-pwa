import { LOGIN_REQUESTED, loginFailed, loginSuccessFully } from "./actions"
import { standardEpic } from "../../standard-request/epic"

export const loginEpic = standardEpic(
  LOGIN_REQUESTED,
  loginSuccessFully,
  loginFailed
)("http://localhost:3000/auth/login")
