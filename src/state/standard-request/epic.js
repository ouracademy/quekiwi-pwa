import { ofType } from "redux-observable"
import { mergeMap, map, catchError } from "rxjs/operators"
import { of } from "rxjs"

// TODO: use in state$ withLatestFrom for a more reactive approach
export const standardEpic = (
  type,
  actionCreatorSuccess,
  actionCreatorFailed
) => request => action$ =>
  action$.pipe(
    ofType(type),
    mergeMap(action =>
      request(action.payload).pipe(
        map(actionCreatorSuccess),
        catchError(error => of(actionCreatorFailed(error)))
      )
    )
  )
