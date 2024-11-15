"use client";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { RootState } from "../redux/store";
import { removeLike } from "../redux/slices/productSlice";
import AddToCartBtn from "./addToCartBtn";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { RxCrossCircled } from "react-icons/rx";
import useToast from "quick-toastify";

const WishListComponent = () => {
  const { products, likedProducts } = useAppSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const { toastComponent, triggerToast } = useToast("top-right");
  // Filter products to display only those in the wishlist
  const wishlistItems = products.filter((product) => likedProducts[product.id]);

  // Calculate the current items to display based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wishlistItems.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const totalPages = Math.ceil(wishlistItems.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {wishlistItems.length > 0 ? (
        <>
          {currentItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center w-full p-4 mb-4 border rounded-lg shadow-md bg-white sm:space-x-4 space-y-4 sm:space-y-0 flex-col md:flex-row"
            >
              {/* Remove from Wishlist Button */}
              <button
                onClick={() => {
                  dispatch(removeLike(product.id));
                  triggerToast({
                    message: "The product has been removed from your wishlist.",
                    type: "success",
                    duration: 3000,
                    animationIn: "pop",
                    animationOut: "slide",
                  });
                }}
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
                <AddToCartBtn
                  cartItem={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    quantity: 1,
                    category: product.category,
                  }}
                  toastFunc={() =>
                    triggerToast({
                      message: `${product.title} added to cart!`,
                      duration: 3000,
                      type: "success",
                      animationIn: "pop",
                      animationOut: "slide",
                    })
                  }
                />
              </div>
            </div>
          ))}
          {wishlistItems.length > itemsPerPage && (
            <div className="flex justify-between mt-6">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 text-white rounded-lg ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-black  hover:bg-gray-700"
                }`}
              >
                <FiArrowLeft />
              </button>
              <span className="text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 text-white rounded-lg ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-black hover:bg-gray-700"
                }`}
              >
                <FiArrowRight />
              </button>
            </div>
          )}
        </>
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
      {toastComponent}
    </div>
  );
};

export default WishListComponent;
