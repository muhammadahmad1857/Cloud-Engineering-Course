import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for each item in the cart
export interface CartItem {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
}

// Define a type for the slice state
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [
    
  ],
  totalQuantity: 1,
  totalPrice: 12.99,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (state.items[index]) {
        state.totalQuantity -= state.items[index]?.quantity;
        state.totalPrice -=
          state.items[index]?.price * state.items[index]?.quantity;
        state.items.splice(index, 1);
      }
      // console.log(index, state.items[0]);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      console.log(action.payload);
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.totalQuantity =
          state.totalQuantity - item.quantity + action.payload.quantity;

        state.totalPrice =
          state.totalPrice -
          item.price * item.quantity +
          item.price * action.payload.quantity;
        item.quantity = action.payload.quantity;
        console.log(item.quantity);
      }
      // console.log(item, state.totalQuantity);
      console.log(state.items);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Selector to get cart state
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
