import { ofType } from "redux-observable"
import { ajax } from "rxjs/ajax"
import { mergeMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"
export const standardEpic = (
  type,
  actionCreatorSuccess,
  actionCreatorFailed
) => url => action$ =>
  action$.pipe(
    ofType(type),
    mergeMap(action =>
      ajax.post(url, action.payload).pipe(
        map(actionCreatorSuccess),
        catchError(error => of(actionCreatorFailed(error)))
      )
    )
  )
