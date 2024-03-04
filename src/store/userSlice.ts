import { TStoreUser } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const initialState: TStoreUser = {
    id: null,
    name: null,
    surname: null,
    username: null,
    role: null,
    email: null,
    password: null,
    token: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (_, action: PayloadAction<TStoreUser>) => action.payload,
        unsetUserData: () => initialState,
    }
})

const userPersistConfig = {
    key: 'user',
    storage: storageSession,
}

export default persistReducer(userPersistConfig, userSlice.reducer)
export const { setUserData, unsetUserData } = userSlice.actions
