import React from "react"
import { Provider } from "react-redux"
import { configureStore } from "./configureStore"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { PersistGate } from "redux-persist/integration/react"

export default ({ element }) => {
  const { store, persistor } = configureStore()

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer
          position="top-center"
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable={false}
        />
        {element}
      </PersistGate>
    </Provider>
  )
}
