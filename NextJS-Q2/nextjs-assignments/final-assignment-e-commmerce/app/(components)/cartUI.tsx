"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";

const CartUI = () => {
  const {
    items,
    totalPrice: tp,
    totalQuantity,
  } = useAppSelector((state: RootState) => state.cart);
  const totalPrice = tp.toFixed(2);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (id: number, newQuantity: number) => {
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  return (
    <div className="my-10">
      {items.length > 0 ? (
        <div className="flex items-start justify-between gap-20 md:flex-row flex-col">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-1 bg-gray-300 min-h-fit flex md:flex-row flex-col"
            >
              <div>
                <Image
                  className="h-40 w-36 rounded-xl object-contain"
                  src={item.image}
                  alt={item.title}
                  width={155}
                  height={165}
                />
              </div>
              <div className="flex justify-between px-2">
                <h2 className="">{item.title}</h2>
                <div className="flex items-center gap-2">
                  <button onClick={() => dispatch(removeFromCart(item.id))}>
                    <RiDeleteBin6Line size={32} color="black" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-full border w-7 h-7 p-1 cursor-pointer border-black flex items-center justify-center font-extrabold text-lg disabled:cursor-not-allowed disabled:bg-gray-200 hover:bg-gray-200 transition-colors duration-300"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity === 1}
                    >
                      <FaMinus size={18} color="black" />
                    </button>
                    <span className="text-lg font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      className="rounded-full w-7 h-7 border p-1 cursor-pointer border-black flex items-center justify-center font-extrabold text-lg hover:bg-gray-200  transition-colors duration-300"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-gray-900 text-white">
            {totalPrice} - {totalQuantity.toFixed(2)}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Image src="/bag.png" alt="Bag Image" height={150} width={150} />
          <h2 className="text-4xl text-center font-semibold mt-4">
            Your Shopping Bag Is Empty
          </h2>
          <Link
            href={"/all-products"}
            className="mt-8 rounded-lg bg-black px-6 py-3 capitalize whitespace text-white transition-colors duration-300 hover:bg-gray-800"
          >
            Explore Our Products
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartUI;
