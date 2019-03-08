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
  const defaultResponseMessage =
    "Ups algo salio mal, por favor recargue la página e inténtelo de nuevo, " +
    "si es que esto no funciona por favor escribanos"

  return (
    (error.response && error.response.message) ||
    // TODO: this should be logged to a server in order to get more information
    // of any kind of errors usually this error happens when the back-end
    // server is down (more info, see .spec)
    defaultResponseMessage
  )
}

export const standardActionsCreator = ([REQUESTED, SUCCESSFULLY, FAILED]) => [
  payload => ({
    type: REQUESTED,
    payload,
  }),
  ajaxResponse => ({
    type: SUCCESSFULLY,
    payload: ajaxResponse.response,
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
