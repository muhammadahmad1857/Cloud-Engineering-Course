import React from "react";

const Newsletter = () => {
  return (
    <div className="relative mb-20 mt-20 flex flex-col items-center justify-center gap-4 font-[sora]">
      <p className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform text-center text-4xl font-bold uppercase tracking-widest text-[#F2F3F7] sm:block sm:text-6xl md:text-8xl">
        newsletter
      </p>
      <h1 className="z-10 text-3xl font-bold max-sm:text-center">
        Subscribe Our Newsletter
      </h1>
      <p className="z-10 text-base font-light max-sm:text-center">
        Get the latest information and promo offers directly
      </p>
      <div className="z-10 mt-2 flex flex-col gap-2 max-sm:w-full sm:flex-row">
        <input
          type="email"
          placeholder="Input Email Address"
          className="w-full border border-[#808080] px-5 py-3 sm:w-80"
        />
        <button className="rounded-md bg-black px-5 py-3 font-bold text-white transition-colors duration-500 hover:bg-[#2b2929]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
