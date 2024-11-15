import CustomLayout from "@/app/(components)/customLayout";
import SignleProduct from "@/app/(components)/singleProduct";
import React from "react";

const productsData = async (id: string) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const Product = async ({ params }: { params: { id: string } }) => {
  const data = await productsData(params.id);
  return (
    <CustomLayout>
      <SignleProduct product={data} />
    </CustomLayout>
  );
};

export default Product;
