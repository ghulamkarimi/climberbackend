import { ITopProducts } from "@/interface/products";
import { createTopProducts, getTopProducts } from "@/service";
import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit";
import { RootState } from "../store/store";



interface ITopProductsState {
    status: "pending" | "fulfilled" | "rejected";
    error: string | null;
}

const topProductsAdapter = createEntityAdapter<ITopProducts, string>({
    selectId: (topProducts) => topProducts._id,
    sortComparer: (a, b) => a.title.localeCompare(b.title)
})

const initialState: ITopProductsState & EntityState<ITopProducts, string> =
    topProductsAdapter.getInitialState({
        status: "pending",
        error: null
    })

export const getTopProductsApi = createAsyncThunk("/topProducts/getTopProductsApi", async () => {
    try {
        const response = await getTopProducts();
        return response.data; 
    } catch (error: any) {
        error.response.data.message
    }
})

export const createTopProductsApi = createAsyncThunk("/topProducts/createTopProductsApi", async (products: ITopProducts) => {
    try {
        const response = await createTopProducts(products);
        return response.data;
    } catch (error: any) {
        error.response.data.message

    }
})


const topProductSlice = createSlice({
    name: "topProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTopProductsApi.pending, (state, action) => {
            state.status = "pending"
        });
         builder.addCase(getTopProductsApi.fulfilled, (state, action) => {
                state.status = "fulfilled";
                topProductsAdapter.setAll(state, action.payload)
            });
             builder.addCase(getTopProductsApi.rejected,(state,action)=>{
                state.status = "rejected";
                state.error = action.error.message || "Something went wrong";
             })
    }
})

export const {selectAll: displayAllTopProducts , selectById:displayTopCategory} =
 topProductsAdapter.getSelectors<RootState>((state) => state.topProducts);

 export default topProductSlice.reducer;