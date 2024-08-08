import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../reducers/appSlice"
import userReducer, { setToken } from "../reducers/userSlice"
import categoriesReducer, { getCategoriesApi } from "../reducers/categoriesSlice"
import { axiosJwt, refreshToken } from "@/service";

const store = configureStore({
    reducer:{
        app:appReducer,
        users:userReducer,
        categories:categoriesReducer                
    }
})
 axiosJwt.interceptors.request.use(async(config)=>{
    const currentDate = new Date()
    const exp = localStorage.getItem("exp")
    if (Number(exp) * 1000 > currentDate.getDate()) {
        const response = await refreshToken();
        config.headers.Authorization = `Bearer ${response.data.refreshToken}`;
        store.dispatch(setToken(response.data.refreshToken));
        // store.dispatch(setUserInfoRefresh(response.data.userInfo_refresh));
      }
      return config;
}) 
 

store.dispatch(getCategoriesApi());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
