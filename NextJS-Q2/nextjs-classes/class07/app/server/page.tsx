"use client";
import React, { useState } from "react";

const Server = () => {
  // UseState hook and it only works in client components
  const [name, setName] = useState("");

  //   const [data, setData] = useState("");
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/client");
  //     const json = await response.json();
  //     setData(json);
  //   };
  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Server Page</h1>
      <p>Welcome to the server page.</p>
      {/* <button
        className="bg-white text-black cursor-pointer p-3 rounded-lg"
        onClick={fetchData}
      >
        Fetch Data
      </button>
      {data.name} */}
      {/* // onChange and useState */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <input
          onChange={(e) => setName(e.target.value)}
          className=" w-52 bg-transparent outline-none px-6 py-2 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
          placeholder="Enter your name..."
          type="text"
        />
        <button className="overflow-hidden  w-32 p-2 h-12  bg-white text-black border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
          Submit
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span className="absolute w-36 h-32 -top-8 -left-2 bg-purple-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            Submit
          </span>
        </button>
      </div>
      <br />
      <p className="text-xl text-wrap w-screen text-white">{name}</p>
    </div>
  );
};

export default Server;
