"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./sectionHeading";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts, Product } from "../redux/slices/productSlice";
import Loader from "./mainLoader";
import NoData from "./noData";
import ErrorPage from "./custom-error";
import ProductCard from "./productCard";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const CategoryProductUI = ({
  category,
  id,
}: {
  category?: "men's clothing" | "women's clothing" | "jewelery" | undefined;
  id: "male" | "female" | "all" | "jewelery";
}) => {
  const {
    products: prods,
    status,
    error,
    likedProducts,
  } = useAppSelector((state: RootState) => state.products);
  const dispatch = useAppDispatch();
  let products;

  // Filter products by category
  if (category) {
    products = prods.filter((prod) => prod.category === category);
  } else {
    products = prods;
  }
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Slice products for current page
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

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
    <div className="mt-10" id={id}>
      <SectionHeading heading="Check What We Have" title="Products" />
      {category}
      {status == "loading" ? (
        <Loader />
      ) : currentProducts.length > 0 ? (
        <div>
          <div className="mt-5 grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center md:place-items-stretch gap-5">
            {currentProducts.map((product: Product) => (
              <ProductCard
                likedProducts={likedProducts}
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Conditional Pagination Controls */}
          {products.length > productsPerPage && (
            <div className="flex justify-center items-center mt-5 space-x-3">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`cursor-pointer transition-colors duration-500   text-black p-2 rounded-full ${
                  currentPage === 1
                    ? "bg-gray-300 cursor-not-allowed hover:bg-gray-400"
                    : "bg-black bg-opacity-50 hover:bg-opacity-100"
                }`}
              >
                <FaArrowLeft size={23} color="white" />
              </button>

              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`cursor-pointer transition-colors duration-500   text-black p-2 rounded-full ${
                  currentPage === totalPages
                    ? "bg-gray-300 cursor-not-allowed hover:bg-gray-400"
                    : "bg-black bg-opacity-50 hover:bg-opacity-100"
                }`}
              >
                {" "}
                <FaArrowRight size={23} color="white" />
              </button>
            </div>
          )}
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default CategoryProductUI;
