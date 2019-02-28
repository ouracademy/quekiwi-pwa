import { ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { mergeMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"
import { SIGNUP, SIGNUP_FAILED, signupSuccessFully } from "./actions"

export const signUpEpic = action$ =>
  action$.pipe(
    ofType(SIGNUP),
    mergeMap(action =>
      ajax.post("http://localhost:3000/auth/signup", action.payload).pipe(
        map(signupSuccessFully),
        catchError(error =>
          of({
            type: SIGNUP_FAILED,
            payload: error.response.message || "Ups, ocurrió un error",
          })
        )
      )
    )
  )
