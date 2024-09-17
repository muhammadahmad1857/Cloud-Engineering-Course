import React from "react";

interface ComponentProps {
  message: string; // Adding a new prop for the button message.
}

const ButtonWithProp = ({ message }: ComponentProps) => {
  return (
    <div>
      <button className="text-white bg-blue-500 p-4 w-72 text-xl font-bold rounded-md hover:bg-blue-700 transition duration-700 ease-in-out">
        {message}
      </button>
    </div>
  );
};

export default ButtonWithProp;
