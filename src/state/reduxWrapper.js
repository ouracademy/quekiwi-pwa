import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "./configureStore"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default ({ element }) => (
  <Provider store={configureStore()}>
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
