import { actionsCreator, actions } from "./actions"
import { standardReducer } from "./reducer"

export const getInitialState = options => ({
  loading: false,
  error: null,
  ...options.getInitialState(),
})

const defaultOptions = {
  getInitialState: () => ({}),
  stateOnSuccess: payload => payload,
}

export const getStandardRequestFor = (name, options = defaultOptions) => {
  const actionTypes = actions(name)
  const actionCreators = actionsCreator(actionTypes)
  const initialState = getInitialState(options)
  const reducer = standardReducer(
    actionTypes,
    initialState,
    options.stateOnSuccess
  )

  return { actionTypes, actionCreators, reducer, initialState }
}
