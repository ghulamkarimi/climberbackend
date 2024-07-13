import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isLogin: boolean;
  isMenuActive:boolean
}

const initialState: IAppState = {
  isLogin: false,
  isMenuActive:false
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIslogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setIsMenuActive: (state, action) => {
      state.isMenuActive = action.payload;
    },
  },
});

export const {setIslogin,setIsMenuActive} = appSlice.actions

export default appSlice.reducer