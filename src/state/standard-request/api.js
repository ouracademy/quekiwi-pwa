import { ajax } from "rxjs/ajax"
import { authHeaders, authToken } from "./auth"

const defaultGetHeaders = () => undefined

const withJSONContent = getHeaders => () => ({
  "Content-Type": "application/json",
  ...getHeaders(),
})

// create an http REST client with base headers
const apiFrom = (baseUrl, getHeaders = defaultGetHeaders) => {
  const headers = withJSONContent(getHeaders)

  return {
    get: url => query => ajax.get(`${baseUrl}/${url}`, headers()),
    post: url => body => ajax.post(`${baseUrl}/${url}`, body, headers()),
    patch: url => body => ajax.patch(`${baseUrl}/${url}`, body, headers()),
    delete: url => ({ id }) =>
      ajax.delete(`${baseUrl}/${url}/${id}`, headers()),
  }
}

const baseUrl = "http://localhost:3000"
export const api = apiFrom(baseUrl)
export const authApi = apiFrom(baseUrl, authHeaders(authToken))
