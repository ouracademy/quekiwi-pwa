import { applyMiddleware } from "redux"
import { createEpicMiddleware } from "redux-observable"

import { rootEpic } from "./epics"
import { configureStore as configurePersistedStore } from "./configurePersist"

const epicMiddleware = createEpicMiddleware()

export const configureStore = () => {
  const { store, persistor } = configurePersistedStore(
    applyMiddleware(epicMiddleware)
  )

  epicMiddleware.run(rootEpic)

  return { store, persistor }
}
