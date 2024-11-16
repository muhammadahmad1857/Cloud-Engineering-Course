import React from "react";
import SectionHeading from "../(components)/sectionHeading";
import Link from "next/link";
import Image from "next/image";

const Success = () => {
  return (
    <div>
      <SectionHeading title="success" heading="Thank You for Your Purchase" />
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-4xl text-center font-semibold mt-4">
          Your order has been successfully placed.
        </h2>
        <Image
          src={"/success-animation.gif"}
          alt={"Successfully Placed."}
          width={150}
          height={150}
        />

        <p className="text-lg text-center mt-4">
          Thank you for shopping with us. We hope you enjoy your purchase.
        </p>
        <Link
          href="/products"
          className="mt-8 rounded-lg bg-black px-6 py-3 capitalize whitespace text-white transition-colors duration-300 hover:bg-gray-800"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
