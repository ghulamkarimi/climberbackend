import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isLogin: boolean;
  isMenuActive:boolean
  isFilterToggleMenuActive:boolean
}

const initialState: IAppState = {
  isLogin: false,
  isMenuActive:false,
  isFilterToggleMenuActive:false
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
    setIsFilterToggleMenuActive: (state, action) => {
      state.isFilterToggleMenuActive = action.payload;
    },
  },
});

export const {setIslogin,setIsMenuActive,setIsFilterToggleMenuActive} = appSlice.actions

export default appSlice.reducer