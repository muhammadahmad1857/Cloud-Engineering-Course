"use client";
import React, { useState } from "react";
import useToast from "quick-toastify";
import { Product } from "../redux/slices/productSlice";
import AddToCartBtn from "./addToCartBtn";
import Image from "next/image";
import ErrorPage from "./custom-error";
import { FaMinus, FaPlus } from "react-icons/fa6";
const SignleProduct = ({ product }: { product: Product }) => {
  
  const { toastComponent, triggerToast } = useToast("top-right");
  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return <ErrorPage />;
  }

  const handleQuantityChange = (e: any) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 20) {
      setQuantity(value);
      return;
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className=" py-10 flex gap-5">
        {/* Thumbnail Section */}
        <div className="mob:flex hidden  flex-col gap-2.5">
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              src={product.image}
              alt={`Thumbnail ${index + 1}`}
              width={220}
              height={220}
              className="cursor-pointer scale-105 transition-all duration-500 border min-h-24 min-w-24 max-w-24 max-h-24 border-gray-300 rounded"
            />
          ))}
        </div>
        <div className="flex justify-between md:flex-row flex-col gap-20">
          {/* Main Image Section */}
          <div className="md:flex-1  flex md:min-w-[50%] justify-center gap-10 items-center">
            <img
              src={product.image}
              alt={product.title}
              className="md:w-full max-w-96 max-h-96 rounded-lg"
            />
          </div>
          {/* Product Info Section */}
          <div className=" flex flex-col gap-5">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-base text-gray-600">{product.category}</p>
            <div className="flex flex-col gap-2.5">
              <h3 className="font-semibold">Select Size</h3>
              <div className="flex gap-2.5">
                {["XS", "S", "M", "l", "XL"].map((size) => (
                  <button
                    key={size}
                    className="p-2 h-12 w-12 capitalize transition-all duration-500 border border-gray-300 rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="font-semibold">Quantity</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleQuantityDecrease}
                  className="p-2 h-9 w-9 border text-4xl flex items-center justify-center border-gray-300 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <FaMinus size={18} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 p-1 border border-gray-300 outline-none focus:border-2     rounded"
                />
                <button
                  onClick={handleQuantityIncrease}
                  className="p-2 h-9 w-9 border text-4xl flex items-center justify-center border-gray-300 rounded-full bg-gray-100 hover:bg-gray-200"
                >
                  <FaPlus size={18} />
                </button>
              </div>
            </div>
            <AddToCartBtn
              cartItem={{
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: quantity,
                category: product.category,
              }}
              toastFunc={() =>
                triggerToast({
                  message: `${product.title} added to cart!`,
                  type: "success",
                  duration: 3000,
                  animationIn: "pop",
                  animationOut: "slide",
                })
              }
            />
            <p className="text-xl font-bold text-gray-800">
              ${Number(product.price).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative mb-20 mt-20  space-y-4 font-[sora]">
          <p className="pointer-events-none absolute left-2 -z-50 top-1/2 hidden  -translate-y-1/2 transform t text-4xl font-bold uppercase tracking-widest text-[#F2F3F7] sm:block sm:text-6xl md:text-8xl">
            Overview
          </p>
          <h1 className="z-10 text-3xl font-bold ">Product Information</h1>
        </div>
        <div className="w-full -mt-8 h-[2px] bg-gray-300"></div>
        <div className="flex max-md:flex-col mt-10 gap-1 md:gap-20 ">
          <h3 className="text-nowrap w-32 capitalize font-bold text-gray-500">
            product Information
          </h3>
          <p className="text-gray-600 leading-relaxed tracking-wider">
            {product.description}
          </p>
        </div>
        <div className="flex max-md:flex-col mt-10  gap-1 md:gap-20 ">
          <h3 className="text-nowrap w-32  capitalize font-bold text-gray-500">
            product Information
          </h3>
          <ul className="list-disc pl-5 ">
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
            <li>lorem ipsum dolor</li>
          </ul>
        </div>
      </div>
      {toastComponent}
    </>
  );
};

export default SignleProduct;
