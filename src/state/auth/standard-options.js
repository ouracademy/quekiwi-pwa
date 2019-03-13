export const authStandardOptions = {
  getInitialState: () => ({ token: null, logged: false }),
  stateOnSuccess: payload => ({
    token: payload.token,
    logged: true,
  }),
}
