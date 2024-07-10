import { IUser, TUser } from "@/interface";
import { userRegister } from "@/service";
import {
  EntityState,
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface IUserState {
    status: "pending"| "fulfilled"|"rejected"
    error : string | null
}

const userAdapter = createEntityAdapter<IUser, string>({
  selectId: (user) => user._id,
});

const initialState: IUserState & EntityState<IUser, string> =
  userAdapter.getInitialState({
    status:"pending",
    error : null
  });

export const userRegisterApi = createAsyncThunk(
  "/users/userRegisterApi",
  async (initialState:TUser) => {
    try {
      const response = await userRegister(initialState);
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
    builder
    .addCase(userRegisterApi.pending,(state)=>{
      state.status="pending";
      
    })
    
    .addCase(userRegisterApi.fulfilled,userAdapter.addOne)
    .addCase(userRegisterApi.rejected,(state, action)=>{
      state.status="rejected";
      state.error=action.error.message || "is accourded"
    })
    
  },
});

export const {selectAll:displayAllUsers ,selectById:displayUser} = userAdapter.getSelectors((state:RootState)=>state.users)


export const {}=userSlice.actions
export default userSlice.reducer
