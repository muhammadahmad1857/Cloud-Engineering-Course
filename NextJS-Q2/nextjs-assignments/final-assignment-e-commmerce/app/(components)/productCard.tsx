"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Product, toggleLike } from "../redux/slices/productSlice";
import { AiFillHeart } from "react-icons/ai";
import { useAppDispatch } from "../redux/hooks";
import StarRating from "./starRating";
import useToast from "quick-toastify";

interface Props {
  product: Product;
  likedProducts: Record<number, boolean>;
}
const ProductCard = ({ product, likedProducts }: Props) => {
  const dispatch = useAppDispatch();
  const {toastComponent,triggerToast} = useToast("bottom-right");
  const handleWishlist = () => {
    dispatch(toggleLike(product.id));
    triggerToast({
      message: !likedProducts[product.id]
        ? "Product added to wishlist"
        : "Product removed from wishlist",
      duration: 1000,
      type: "success",
      animationIn: "pop",
      animationOut: "slide",
    });
  };
  return (
    <div className="w-full max-w-80 mob:w-72 border p-2 rounded-xl relative transition-transform duration-500 hover:scale-105 h-full">
      {/* Heart icon for liking the product */}
      <button
        onClick={handleWishlist}
        className="absolute top-1 left-1 z-50 text-2xl cursor-pointer"
      >
        {likedProducts[product.id] ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart className="text-gray-300" />
        )}
      </button>

      <Link href={`/products/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="min-h-64 min-w-full max-h-64 max-w-full shadow-xl hover:shadow-2xl hover:shadow-gray-800 transition-shadow duration-500  cursor-pointer mb-2 object-contain mix-blend-color-burn rounded-xl"
        />
        <div className="py-2 gap-1 flex flex-col">
          <h3 className="text-base font-semibold">{product.title}</h3>
          <StarRating rating={product.rating.rate} />
          <p className="text-lg font-semibold">${product.price}</p>
        </div>
      </Link>
      {toastComponent}

    </div>
  );
};

export default ProductCard;
