import { actionsCreator, actions } from "./actions"

export const initialState = {
  logged: false,
  loading: false,
  error: null,
  token: null,
}

const getInitialState = name => {
  return name ? { ...initialState, [name]: null } : initialState
}

export const standardReducer = (types, nameResponseAs) => (
  prevState = getInitialState(nameResponseAs),
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
        token: payload.token,
        logged: true,
        ...(nameResponseAs && { [nameResponseAs]: payload }),
      }
    case FAILED:
      return { ...prevState, loading: false, error: payload }
    default:
      return prevState
  }
}

export const getStandardRequestFor = (name, options = { onSuccess: null }) => {
  const actionTypes = actions(name)
  const actionCreators = actionsCreator(actionTypes)
  const reducer = standardReducer(actionTypes, options.onSuccess)

  return { actionTypes, actionCreators, reducer }
}