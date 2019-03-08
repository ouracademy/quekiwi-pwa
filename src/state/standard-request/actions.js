export const actionsCreator = ([REQUESTED, SUCCESSFULLY, FAILED]) => [
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

export const actions = name => [
  `${name}_REQUESTED`,
  `${name}_SUCCESSFULLY`,
  `${name}_FAILED`,
]
