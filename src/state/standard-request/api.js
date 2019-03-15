import { ajax } from "rxjs/ajax"
import { authHeaders, authToken } from "./auth"

const defaultGetHeaders = () => undefined

// create an http REST client with base headers
const apiFrom = (baseUrl, getHeaders = defaultGetHeaders) => ({
  post: url => body => ajax.post(`${baseUrl}/${url}`, body, getHeaders()),
  delete: url => ({ id }) =>
    ajax.delete(`${baseUrl}/${url}/${id}`, getHeaders()),
})

const baseUrl = "http://localhost:3000"
export const api = apiFrom(baseUrl)
export const authApi = apiFrom(baseUrl, authHeaders(authToken))
