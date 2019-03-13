import { SIGN_UP_REQUESTED, signUpFailed, signUpSuccessFully } from "./actions"
import { standardEpic } from "../../standard-request/epic"

export const signUpEpic = standardEpic(
  SIGN_UP_REQUESTED,
  signUpSuccessFully,
  signUpFailed
)("http://localhost:3000/auth/signup")
