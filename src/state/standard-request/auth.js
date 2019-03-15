// TODO: set this token on login
// instead of using local storage

export const authToken = () =>
  JSON.parse(JSON.parse(window.localStorage.getItem("persist:root")).auth).token

export const authHeaders = authToken => () => {
  return {
    Authorization: `Bearer ${authToken()}`,
  }
}
