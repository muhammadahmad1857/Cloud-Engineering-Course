
"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./sectionHeading";
import Image from "next/image";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import Link from "next/link";
import Loader from "./mainLoader";
import NoData from "./noData";
import ErrorPage from "./custom-error";

const CategoryProductUI = ({
  category,
}: {
  category: "men's clothing" | "women's clothing" | "jewellery";
}) => {
  const {
    products: prods,
    loading: isLoading,
    error,
  } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();

  // Filter products by category
  const products = prods.filter((prod) => prod.category === category);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Slice products for current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage, // if current page is 1 then it slice from 0 to 10
    currentPage * productsPerPage
  );

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(prods);

  // Reset current page if category changes or products load
  useEffect(() => {
    setCurrentPage(1);
  }, [category, products.length]);

  // Error handling
  if (error) {
    return <ErrorPage err={error} />;
  }

  // Pagination controls
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <SectionHeading heading="Check What We Have" title="Products" />
      {isLoading ? (
        <Loader />
      ) : currentProducts.length > 0 ? (
        <>
          <div className="mt-5 grid xl:grid-cols-4 md:grid-cols-3 mob:grid-cols-2 place-items-center gap-5">
            {currentProducts.map((product) => (
              <div
                className="w-full max-w-72 mob:w-64 border p-2 rounded-xl transition-transform duration-500 hover:scale-105"
                key={product.id}
              >
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="max-h-96 w-full bg-gray-300 cursor-pointer mb-2 object-cover rounded-xl"
                  />
                  <div className="py-2 gap-2 flex flex-col">
                    <h3 className="text-base font-semibold">{product.title}</h3>
                    <p>{product.rating.rate}</p>
                    <p className="text-lg font-semibold">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center items-center mt-5 space-x-3">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default CategoryProductUI;
