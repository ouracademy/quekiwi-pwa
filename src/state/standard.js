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

const standardActions = name => [
  `${name}_REQUESTED`,
  `${name}_SUCCESSFULLY`,
  `${name}_FAILED`,
]

const getErrorMessage = error => {
  const defaultResponseMessage = "Ups, ocurrió un error"
  const existServerResponse = !!error.response
  if (existServerResponse) {
    return error.response.message || defaultResponseMessage
  } else {
    return "No hay conexion con el servidor"
  }
}
const standardActionsCreator = ([REQUESTED, SUCCESSFULLY, FAILED]) => [
  payload => ({
    type: REQUESTED,
    payload,
  }),
  response => ({
    type: SUCCESSFULLY,
    payload: response.response,
  }),
  error => ({
    type: FAILED,
    payload: getErrorMessage(error),
  }),
]

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
  const actionTypes = standardActions(name)
  const actionCreators = standardActionsCreator(actionTypes)
  const reducer = standardReducer(actionTypes, options.nameResponseAs)

  return { actionTypes, actionCreators, reducer }
}
