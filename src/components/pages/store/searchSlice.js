import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/apiURL";
import axios from "axios";
const initialState = {
  productSearch: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(fetchApiProductSearch.fulfilled, (state, action) => {
      state.productSearch = action.payload;
    });
  },
});

export const fetchApiProductSearch = createAsyncThunk(
  "product-search/fetch",
  async (searchTerm) => {
    const response = await axios.get(
      `${BASE_URL}products/search?q=${searchTerm}`
    );
    return response.data.products;
  }
);
export const getApiProductSearch = (state) => state.search.productSearch;
export default searchSlice.reducer;
