import { actionsCreator, actions } from "./standard-request/actions"

export const initialState = {
  logged: false,
  loading: false,
  error: null,
  token: null,
  payload: null,
}

const getInitialState = name => {
  return { ...initialState, [name]: null }
}

const standardReducer = (types, nameResponseAs) => (
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
        payload: payload,
        logged: true,
        ...(nameResponseAs && { [nameResponseAs]: payload }),
      }
    case FAILED:
      return { ...prevState, loading: false, error: payload }
    default:
      return prevState
  }
}

export const getStandardRequestFor = (
  name,
  options = { nameResponseAs: null }
) => {
  const actionTypes = actions(name)
  const actionCreators = actionsCreator(actionTypes)
  const reducer = standardReducer(actionTypes, options.nameResponseAs)

  return { actionTypes, actionCreators, reducer }
}
