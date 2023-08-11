import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {BASE_URL} from "../../utils/apiURL"
import axios from "axios";

const initialState = {
    products: [],
    productSingle: []
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(fetchApiProduct.fulfilled , (state,action) =>{
            state.products = action.payload
        })
        .addCase(fetchApiProductSingle.fulfilled , (state,action) =>{
            state.productSingle = action.payload
        })
    }
})

export const fetchApiProduct = createAsyncThunk('product/fetch', async(limit) =>{
    const response = await axios(`${BASE_URL}product?limit=${limit}`)
    return response.data.products;
})

export const fetchApiProductSingle = createAsyncThunk('product-single/fetch', async(id) =>{
    const response = await axios(`${BASE_URL}product/${id}`)
    return response.data;
})

export const getApiProduct = (state) => state.product.products
export const getApiProductSingle = (state) => state.product.productSingle
export default productSlice.reducer