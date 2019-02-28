import { ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { mergeMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"
import { LOGIN_REQUESTED, loginFailed, loginSuccessFully } from "./actions"

export const loginEpic = action$ =>
  action$.pipe(
    ofType(LOGIN_REQUESTED),
    mergeMap(action =>
      ajax.post("http://localhost:3000/auth/login", action.payload).pipe(
        map(loginSuccessFully),
        catchError(error => of(loginFailed(error)))
      )
    )
  )
