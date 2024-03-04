import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistedUserReducer from "./userSlice";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
    user: persistedUserReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export const persistor = persistStore(store)

export type TAppStore = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
export const useAppDispatch: () => TAppDispatch = useDispatch
