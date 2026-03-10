import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:3001/products";
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await axios.get(API)
    return res.data
  }
)
export const addProduct = createAsyncThunk(
  "products/add",
  async (product) => {
    const res = await axios.post(API, product)
    return res.data
  }
)
export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id) => {
    await axios.delete(API + "/" + id)
    return id
  }
)
export const updateProduct = createAsyncThunk(
  "products/update",
  async ({ id, product }) => {
    const res = await axios.put(API + "/" + id, product)
    return res.data
  }
)
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload
    })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.items.push(action.payload)
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload)
    })
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.items = state.items.map(p =>
        p.id === action.payload.id ? action.payload : p
      )
    })
  }
})
export default productSlice.reducer
