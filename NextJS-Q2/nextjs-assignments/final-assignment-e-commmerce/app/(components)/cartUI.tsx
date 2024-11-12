"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";

const CartUI = () => {
  const {
    items,
    totalPrice: tp,
    totalQuantity,
  } = useAppSelector((state: RootState) => state.cart);
  const totalPrice = tp.toFixed(2);
  return (
    <div className=" my-10">
      {items.length > 0 ? (
        <div className="flex items-start justify-between gap-20">
          {items.map((item) => (
            <div className="flex-1 bg-gray-300">
              <div>
                <Image
                  className="h-40 w-36 rounded-xl"
                  src={item.image}
                  alt={item.title}
                  width={155}
                  height={165}
                />
              </div>
            </div>
          ))}
          <div className="bg-gray-900 text-white">Hello</div>
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col">
          <Image src="/bag.png" alt="Bag Image" height={150} width={150} />
          <h2 className="text-4xl  font-semibold mt-4">
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
