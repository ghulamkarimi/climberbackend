import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
  isLogin: boolean;
}

const initialState: IAppState = {
  isLogin: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIslogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const {setIslogin} = appSlice.actions

export default appSlice.reducer