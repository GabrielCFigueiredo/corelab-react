import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./feature/cartSlice"
import storage from "redux-persist/lib/storage"
import {FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }

const reducer = combineReducers({
    favorites: cartReducer
})

const persistedReducers = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store