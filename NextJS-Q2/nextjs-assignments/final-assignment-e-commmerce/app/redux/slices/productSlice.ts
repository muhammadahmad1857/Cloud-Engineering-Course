import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
  };
}
export interface ProductState {
  products: Product[];
  error: any;
  loading: boolean;
}

const initialState: ProductState = {
  products: [],
  error: null,
  loading: false,
};
export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return await response.json();
    } catch (err: any) {
      return rejectWithValue(err.message as string);
    }
  }
);

export const productSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...state.products, ...action.payload];
      console.log(state.products);
      state.loading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
  },
});

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products;

export default productSlice.reducer;
