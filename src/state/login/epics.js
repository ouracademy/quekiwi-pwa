import { ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { mergeMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"
import { LOGIN, LOGIN_FAILED, loginSuccessFully } from "./actions"

export const loginEpic = action$ =>
  action$.pipe(
    ofType(LOGIN),
    mergeMap(action =>
      ajax.post("http://localhost:3000/auth/login", action.payload).pipe(
        map(loginSuccessFully),
        catchError(error =>
          of({
            type: LOGIN_FAILED,
            payload: error.response.message || "Ups, ocurrió un error",
          })
        )
      )
    )
  )
