import { IUser, TUser } from "@/interface";
import { checkToken, userLogin, userRegister } from "@/service";
import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface IUserState {
  status: "pending" | "fulfilled" | "rejected";
  error: string | null;
  token: string;
}

const userAdapter = createEntityAdapter<IUser, string>({
  selectId: (user) => user._id,
});

const initialState: IUserState & EntityState<IUser, string> =
  userAdapter.getInitialState({
    status: "pending",
    error: null,
    token: "",
  });

export const userRegisterApi = createAsyncThunk(
  "/users/userRegisterApi",
  async (initialState: TUser) => {
    try {
      const response = await userRegister(initialState);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

export const userLoginApi = createAsyncThunk(
  "/users/userLoginApi",
  async (initialState: TUser) => {
    try {
      const response = await userLogin(initialState);
      console.log("responseDta Login ", response.data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

// CheckUserIsLogin

export const checkTokenApi = createAsyncThunk(
  "/users/checkTokenApi",
  async () => {
    try {
      const response = await checkToken();
      localStorage.setItem("userId", response.data.user._id);

      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterApi.pending, (state) => {
        state.status = "pending";
      })

      .addCase(userRegisterApi.fulfilled, userAdapter.addOne)
      .addCase(userRegisterApi.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "is accorded";
      })

      .addCase(userLoginApi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(userLoginApi.fulfilled, (state, action) => {
        userAdapter.setOne(state, action.payload.user);
      })
      .addCase(userLoginApi.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message || "is accorded";
      });
  },
});

export const { selectAll: displayAllUsers, selectById: displayUser } =
  userAdapter.getSelectors((state: RootState) => state.users);

export const {setToken} = userSlice.actions;
export default userSlice.reducer;
