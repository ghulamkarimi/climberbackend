import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isLogin: boolean;
  isMenuActive:boolean
  isFilterToggleMenuActive:boolean
  isFeaturedActive:boolean
}

const initialState: IAppState = {
  isLogin: false,
  isMenuActive:false,
  isFilterToggleMenuActive:false,
  isFeaturedActive:false
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
    setIsFeaturedActive: (state, action) => {
      state.isFeaturedActive = action.payload;
    },
  },
});

export const {setIslogin,setIsMenuActive,setIsFilterToggleMenuActive,setIsFeaturedActive} = appSlice.actions

export default appSlice.reducer