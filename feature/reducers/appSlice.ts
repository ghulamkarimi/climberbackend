import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isLogin: boolean;
  isMenuActive:boolean
  isFilterToggleMenuActive:boolean
  isFeaturedActive:boolean
  isSearchMenuActive:boolean
  isAddCartMenuActive:boolean
  inputValueSearchMenu:string
}

const initialState: IAppState = {
  isLogin: false,
  isMenuActive:false,
  isFilterToggleMenuActive:false,
  isFeaturedActive:false,
  isSearchMenuActive:false,
  isAddCartMenuActive:false,
  inputValueSearchMenu:''
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
    setIsSearchMenuActive: (state, action) => {
      state.isSearchMenuActive = action.payload;
    },
    setInputValueSearchMenu: (state, action) => {
      state.inputValueSearchMenu = action.payload;
    },
    setIsAddCartMenuActive: (state, action) => {
      state.isAddCartMenuActive = action.payload;
    },
  },
});

export const {setIslogin,setIsMenuActive,setIsFilterToggleMenuActive,setIsFeaturedActive,setIsSearchMenuActive,setInputValueSearchMenu,setIsAddCartMenuActive} = appSlice.actions

export default appSlice.reducer