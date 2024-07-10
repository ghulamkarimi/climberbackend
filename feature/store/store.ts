import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducers/appSlice"
import userReducer from "../reducers/userSlice"

const store = configureStore({
    reducer:{
        app:appReducer,
        users:userReducer
    }
})




export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
