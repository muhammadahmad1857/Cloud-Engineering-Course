
"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { removeLike, toggleLike } from "../redux/slices/productSlice";
import AddToCartBtn from "./addToCartBtn";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { RxCrossCircled } from "react-icons/rx";

const WishListComponent = () => {
  const { products, likedProducts } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  // Filter products to display only those in the wishlist
  const wishlistItems = products.filter((product) => likedProducts[product.id]);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {wishlistItems.length > 0 ? (
        wishlistItems.map((product) => (
          <div
            key={product.id}
            className="flex items-center w-full p-4 mb-4 border rounded-lg shadow-md bg-white sm:space-x-4 space-y-4 sm:space-y-0 flex-col md:flex-row"
          >
            {/* Remove from Wishlist Button */}
            <button
              onClick={() => dispatch(removeLike(product.id))}
              className="text-gray-500 hover:text-red-600 self-start md:self-auto"
            >
              <RxCrossCircled size={32} />
            </button>

            {/* Product Image */}
            <div className="w-52 md:h-auto">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover w-full h-full rounded"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col flex-grow md:pl-4">
              <h2 className="text-lg font-semibold mb-1 text-gray-800">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {product.description}
              </p>

              {/* Price */}
              <span className="text-lg font-bold text-gray-900 mt-2 md:mt-0">
                ${product.price}
              </span>

              {/* Add to Cart Button */}
              <AddToCartBtn id={product.id} />
            </div>
          </div>
        ))
      ) : (
        <section className="space-top pt-4 relative text-center">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <div className="w-full lg:w-9/12">
                <div className="text-center px-4">
                  <div className="mb-6">
                    <Image
                      src="/error.png"
                      width={500}
                      height={300}
                      alt="No Wishlist Items"
                      className="mx-auto"
                    />
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-semibold mt-8 text-theme-color">
                    Your Wishlist is Empty!
                  </h2>
                  <p className="text-gray-600 text-base sm:text-lg mt-6 mb-8">
                    Looks like you haven&apos;t added anything to your wishlist
                    yet. Start exploring our amazing collection and find items
                    you love!
                  </p>
                  <Link
                    href={"/all-products"}
                    className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 transition-colors duration-300 hover:bg-gray-800"
                  >
                    <FiShoppingCart className="mr-2 h-6 w-6" />
                    Explore Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default WishListComponent;
