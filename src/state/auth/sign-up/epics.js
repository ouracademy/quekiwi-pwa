import { ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { mergeMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"
import { SIGN_UP_REQUESTED, signUpFailed, signUpSuccessFully } from "./actions"

export const signUpEpic = action$ =>
  action$.pipe(
    ofType(SIGN_UP_REQUESTED),
    mergeMap(action =>
      ajax.post("http://localhost:3000/auth/signup", action.payload).pipe(
        map(signUpSuccessFully),
        catchError(error => of(signUpFailed(error)))
      )
    )
  )
