import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./reducers"
import { createStore } from "redux"

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = middleware => {
  const store = createStore(persistedReducer, middleware)
  const persistor = persistStore(store)

  return { store, persistor }
}
