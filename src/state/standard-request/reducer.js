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
        ...stateOnSuccess(payload, prevState),
      }
    case FAILED:
      return { ...prevState, loading: false, error: payload }
    default:
      return prevState
  }
}
