import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  status: "success" | "loading" | "idle";
  likedProducts: { [key: number]: boolean }; // Track liked status by product ID
}

const initialState: ProductState = {
  products: [],
  error: null,
  status: "idle",
  likedProducts: {}, // Initialize likedProducts as an empty object
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
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.likedProducts[productId] = !state.likedProducts[productId];
    },
    removeLike: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.likedProducts[productId] = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = [...action.payload];
      state.status = "success";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.error.message || "Failed to fetch products";
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.error = null;
      state.status = "loading";
    });
  },
});

// Export toggleLike action for use in components
export const { toggleLike, removeLike } = productSlice.actions;

// Selector to get products and liked status
export const selectProducts = (state: RootState) => state.products;

export default productSlice.reducer;
