import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";

const initialState = {
  categories: [],
  categoryProduct: [],
  productOfCategory: []
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(fetchApiProductByCategory.fulfilled, (state, action) => {
        state.productOfCategory = action.payload;
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
export const fetchApiProductByCategory = createAsyncThunk(
  "product-by-category/fetch",
  async (category) => {
    const response = await axios(`${BASE_URL}product/category/${category}`);
    return response.data.products;
  }
);
export const selectCategories = (state) => state.category.categories;
export const getApiProductByCategory = (state) => state.category.productOfCategory
export default categorySlice.reducer;
