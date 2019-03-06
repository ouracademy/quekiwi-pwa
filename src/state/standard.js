export const initialState = {
  logged: false,
  loading: false,
  error: null,
  token: null,
}

export const standardActions = name => [
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

export const standardActionsCreator = ([REQUESTED, SUCCESSFULLY, FAILED]) => [
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

export const standardReducer = types => (prevState = initialState, action) => {
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
      }
    case FAILED:
      return { ...prevState, loading: false, error: payload }
    default:
      return prevState
  }
}

export const getStandardFor = name => {
  const actionTypes = standardActions(name)
  const actionCreators = standardActionsCreator(actionTypes)
  const reducer = standardReducer(actionTypes)

  return { actionTypes, actionCreators, reducer }
}
