"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { removeFromCart, updateQuantity } from "../redux/slices/cartSlice";
import useToast from "quick-toastify";
import getStripe from "@/utils/stripe";

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
    triggerToast({
      type: "success",
      duration: 3000,
      message: "Product Quantity updated successfully",
      animationIn: "pop",
      animationOut: "slide",
    });
  };
  const { toastComponent, triggerToast } = useToast("top-right");
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems: items }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Something went wrong.");
      }

      const { id } = await response.json();

      const stripe = await getStripe();

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId: id });
        if (error) {
          console.error("Stripe redirect error:", error);
          triggerToast({
            message: "Payment failed. Please try again.",
            duration: 3000,
            type: "error",
            animationIn: "pop",
            animationOut: "slide",
          });
        }
      }
    } catch (error: any) {
      console.error("Error during checkout:", error);
      triggerToast({
        message: error.message || "Something went wrong.",
        duration: 3000,
        type: "error",
        animationIn: "pop",
        animationOut: "slide",
      });
    }
  };
  return (
    <div className="my-10">
      {items.length > 0 ? (
        <div className="flex items-start justify-between gap-20 md:flex-row flex-col">
          <div className="flex flex-col gap-10  w-full">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-1 w-full min-h-fit rounded-lg hover:shadow-xl shadow-lg transition-all duration-300 flex md:flex-row flex-col"
              >
                <div className="max-md:w-full max-md:flex max-md:items-center max-md:justify-center">
                  <Image
                    className="h-full max-h-96 md:w-36 w-full max-w-96"
                    src={item.image}
                    alt={item.title}
                    width={155}
                    height={165}
                  />
                </div>
                <div className="w-full px-4 space-y-2 py-2">
                  <div className="flex justify-between w-full ">
                    <h2 className="text-xl tracking-wider">{item.title}</h2>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item.id));
                        triggerToast({
                          type: "success",
                          duration: 3000,
                          message: "Product successfully removed from cart",
                          animationIn: "pop",
                          animationOut: "slide",
                        });
                      }}
                    >
                      <RiDeleteBin6Line size={32} color="black" />
                    </button>
                  </div>
                  <p className="text-gray-400 font-bold text-lg">
                    {item.category}
                  </p>
                  <div>
                    <p className="text-xl font-semibold">Delivery Estimation</p>
                    <p className="font-semibold text-lg text-[#e7d03c]">
                      5 working days
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h2 className="text-2xl font-bold">${item.price}</h2>
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
                        <FaPlus size={18} color="black" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mob:px-10 px-2 shadow-2xl py-6 w-[300px] md:shadow-xl mob:w-96">
            <h2 className="capitalize text-xl font-bold text-nowrap">
              Order sumamry
            </h2>
            <div className="flex justify-between items-center py-4 text-lg">
              <p>Quantity</p>
              <p>{totalQuantity} Product(s)</p>
            </div>
            <div className="flex justify-between items-center text-lg py-4">
              <p>Price</p>
              <p>${totalPrice}</p>
            </div>{" "}
            <button
              onClick={() => handleCheckout()}
              className="mt-2 rounded-lg text-sm capitalize bg-black px-4 py-3 text-white transition-colors duration-300 hover:bg-gray-800"
            >
              {" "}
              Proceed to CheckOut
            </button>{" "}
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
      {toastComponent}
    </div>
  );
};

export default CartUI;
