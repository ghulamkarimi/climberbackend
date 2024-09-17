import { ICategories } from "@/interface/categories";
import { createAsyncThunk, createEntityAdapter, createSlice, EntityState } from "@reduxjs/toolkit";
import { getCategories, createCategories, deleteCategories, editCategories } from '../../service/index';
import { RootState } from "../store/store";
import Categories from '../../src/app/[locale]/(pages)/men/page';



interface ICategoriesState {
    status: "pending" | "fulfilled" | "rejected";
    error: string | null;
isCreateCategorieOpen:boolean
}

const categoriesAdapter = createEntityAdapter<ICategories, string>({
    selectId: (categories) => categories._id,
    sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState: ICategoriesState & EntityState<ICategories, string> =
    categoriesAdapter.getInitialState({
        status: "pending",
        error: null,
        isCreateCategorieOpen:false
    });

export const getCategoriesApi = createAsyncThunk("/categories/getCategoriesApi", async () => {
    try {
        const response = await getCategories();
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
});

export const createCategoriesApi = createAsyncThunk("/categories/createCategoriesApi", async (category: ICategories) => {
    try {
        const response = await createCategories(category);
        return response.data;
    } catch (error: any) {
        throw error.response.data.message;
    }
});

export const deleteCategoriesApi = createAsyncThunk(
    "/categories/deleteCategoriesApi",
    async ({ userId, _id }: { userId: string; _id: string }) => {
      try {
        const response = await deleteCategories(userId, _id);
        console.log("Full response from API:", response); 
        return response.data; 
      } catch (error: any) {
        console.error("Error deleting category:", error); 
        throw error.response.data.message;
      }
    }
  );
  


export const editCategoriesApi = createAsyncThunk("/categories/editCategoriesApi", async ({ _id, category }: { _id: string, category: ICategories }) => {
    try {
        const response = await editCategories(_id, category)
        return response.data;

    } catch (error: any) {
        throw error.response.data.message;
    }
})

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setIsCreateCategorieOpen:(state,action)=>{
            state.isCreateCategorieOpen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategoriesApi.pending, (state, action) => {
            console.log('Categories API fulfilled:', action.payload);
            state.status = "pending";
        });
        builder.addCase(getCategoriesApi.fulfilled, (state, action) => {
            state.status = "fulfilled";
            categoriesAdapter.setAll(state, action.payload);
        });
        builder.addCase(getCategoriesApi.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message || "is accorded";
        });
        builder.addCase(createCategoriesApi.fulfilled,(state,action)=>{
            categoriesAdapter.setOne(state,action.payload.category)
        })
        builder.addCase(deleteCategoriesApi.fulfilled,(state,action)=>{
            categoriesAdapter.removeOne(state,action.payload.category._id)
        })
    }
})


export const  {setIsCreateCategorieOpen} = categoriesSlice.actions

export const { selectAll: displayAllCategories, selectById: displayCategory } =
    categoriesAdapter.getSelectors((state: RootState) => state.categories);

export default categoriesSlice.reducer;
