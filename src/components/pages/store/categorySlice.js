import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";

const initialState = {
  categories: [],
  categoryProduct: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});
export const getAllCategories = createAsyncThunk(
  "category/getAllCategories",
  async () => {
    const response = await axios.get(`${BASE_URL}product/categories`);
    
    return response.data;
  }
);

export const selectCategories = (state) => state.category.categories;
export default categorySlice.reducer;
