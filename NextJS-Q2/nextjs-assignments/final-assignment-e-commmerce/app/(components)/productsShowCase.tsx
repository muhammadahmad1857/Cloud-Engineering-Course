"use client";
import React, { useEffect } from "react";
import SectionHeading from "./sectionHeading";
import Image from "next/image";
import { RootState } from "../redux/store";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { fetchProducts } from "../redux/slices/productSlice";
import Link from "next/link";
import Loader from "./mainLoader";
import NoData from "./noData";
import ErrorPage from "./custom-error";

const ProductsShowCase = () => {
  const {
    products,
    loading: isLoading,
    error,
  } = useAppSelector((state: RootState) => state.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Error handling
  if (error) {
    return <ErrorPage err={error} />;
  }

  return (
    <>
      <SectionHeading heading="Check What We Have" title="Products" />
      {isLoading ? (
        <Loader />
      ) : products.length > 0 ? (
        <div className="mt-5 flex flex-col items-center gap-5 tab:flex-row tab:justify-between">
          {products.slice(0, 3).map((product) => (
            <Link
              href={`/product/${product.id}`}
              className="w-full max-w-[350px] mob:w-96 p-3 transition-transform duration-500 hover:scale-105 border border-gray-300 rounded-xl"
              key={product.id}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="max-h-96 w-full cursor-pointer mb-2 object-cover rounded-xl"
              />
              <h3 className="text-base font-semibold">{product.title}</h3>
              <p className="text-lg font-semibold">${product.price}</p>
            </Link>
          ))}
        </div>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default ProductsShowCase;
