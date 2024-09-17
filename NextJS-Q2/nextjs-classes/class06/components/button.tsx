"use client";
import React from "react";

const Button = () => {
  return (
    <div>
      <button
        onClick={() =>
          alert(
            "This is a client component and onClick work on client component just and it is the component without props"
          )
        }
        className="text-white bg-red-500 p-4 w-72 text-xl font-bold rounded-md hover:bg-red-700 transition duration-700 ease-in-out"
      >
        Click me to see a magic
      </button>
    </div>
  );
};

export default Button;
