import Button from "@/components/button";
import ButtonWithProp from "@/components/buttonWithProp";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-20 h-dvh ">
        <h1 className="font-extrabold gradient-title  text-center text-4xl sm:text-6xl">
          Class06: Components and Props
        </h1>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-10">
          {/* Button without a prop */}
          <Button />
          {/* Button with a prop */}
          <ButtonWithProp message="Button with a prop msg" />
        </div>
      </div>
    </>
  );
};

export default Home;
