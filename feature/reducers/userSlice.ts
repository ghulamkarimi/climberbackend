import { IUser } from "@/interface";
import { userRegister } from "@/service";
import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

interface IUserState {
    status: "pending"| "fulfilled"|"rejected"
}

const userAdapter = createEntityAdapter<IUser, string>({
  selectId: (user) => user._id,
});

const initialState: IUserState & EntityState<IUser, string> =
  userAdapter.getInitialState({
    status:"pending"
  });

export const userRegisterApi = createAsyncThunk(
  "/users/userRegisterApi",
  async () => {
    try {
      const response = await userRegister();
      return response.data;
    } catch (error: any) {
      throw error.response.data.message;
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterApi.fulfilled,userAdapter.addOne)
  },
});
