import { actionsCreator, actions } from "./actions"

export const getInitialState = options => ({
  loading: false,
  error: null,
  ...options.getInitialState(),
})

export const standardReducer = (types, initialState, stateOnSuccess) => (
  prevState = initialState,
  action
) => {
  const [REQUESTED, SUCCESSFULLY, FAILED] = types

  const { type, payload } = action
  switch (type) {
    case REQUESTED:
      return { ...prevState, loading: true, error: null }
    case SUCCESSFULLY:
      return {
        ...prevState,
        loading: false,
        error: null,
        ...stateOnSuccess(payload),
      }
    case FAILED:
      return { ...prevState, loading: false, error: payload }
    default:
      return prevState
  }
}

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
