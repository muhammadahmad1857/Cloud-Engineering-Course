"use client";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
// import { useDispatch } from "react-redux";

const AddToCartBtn = ({ id }: { id: number }) => {
  console.log(id);
  //   const dispatch = useDispatch();
  //   const addToCart = (productId: number) =>{
  //     console.log(productId)
  //   }
  return (
    <button
      //   onClick={() => dispatch(addToCart(id))}
      className="mt-8 rounded-lg bg-black px-6 py-3 capitalize whitespace text-white transition-colors duration-300 hover:bg-gray-800"
    >
      <FiShoppingCart className="mr-2 inline h-6 w-6" />
      Add to cart
    </button>
  );
};

export default AddToCartBtn;
