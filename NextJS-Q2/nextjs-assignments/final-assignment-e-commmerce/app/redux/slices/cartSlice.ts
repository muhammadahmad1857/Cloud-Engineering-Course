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
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      quantity: 1,
    },
  ],
  totalQuantity: 0,
  totalPrice: 0,
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
      if (index >= 0) {
        state.items.splice(index, 1);
        state.totalQuantity -= state.items[index].quantity;
        state.totalPrice -=
          state.items[index].price * state.items[index].quantity;
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.totalQuantity =
          state.totalQuantity - item.quantity + action.payload.quantity;
        state.totalPrice =
          state.totalPrice -
          item.price * item.quantity +
          item.price * action.payload.quantity;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

// Selector to get cart state
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
