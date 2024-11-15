"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { CartItem } from "../redux/slices/cartSlice";

const AddToCartBtn = ({
  cartItem,
  toastFunc,
}: {
  cartItem: CartItem;
  toastFunc: () => void;
}) => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(addToCart(cartItem));toastFunc();
      }}
      className="mt-8 rounded-lg bg-black px-6 py-3 capitalize whitespace text-white transition-colors duration-300 hover:bg-gray-800"
    >
      <FiShoppingCart className="mr-2 inline h-6 w-6" />
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
