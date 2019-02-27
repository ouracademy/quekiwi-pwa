import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import rootReducer from "."

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const axios = require("axios")
axios.defaults.baseURL = "http://localhost:3000"

const createStore = () => reduxCreateStore(rootReducer)
export default ({ element }) => (
  <Provider store={createStore()}>
    <ToastContainer
      position="top-center"
      autoClose={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange
      draggable={false}
    />
    {element}
  </Provider>
)
