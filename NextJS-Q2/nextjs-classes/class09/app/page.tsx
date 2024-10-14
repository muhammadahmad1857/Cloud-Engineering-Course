import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-700 min-h-screen flex flex-col justify-center items-center p-8">
      <div className="bg-white bg-opacity-10 rounded-xl shadow-2xl p-10 max-w-3xl w-full">
        <h1 className="text-6xl font-extrabold mb-6 text-white text-center">Class09</h1>
        <p className="text-gray-200 mb-8 text-center text-xl leading-relaxed">
          Welcome to Class09! Here, we delve into the fascinating world of routing theory and its practical applications. Explore our{" "}
          <Link
            href={"https://github.com/muhammadahmad1857/Cloud-Engineering-Course/blob/main/NextJS-Q2/nextjs-classes/class09/README.md"}
            className="text-blue-300 hover:text-blue-100 transition-all duration-300 underline"
          >
            Readme.md
          </Link>{" "}
          for more details.
        </p>

        <footer className="flex justify-center space-x-8 mt-12">
          <Link
            href="https://github.com/muhammadahmad1857"
            className="text-gray-200 hover:text-blue-300 transition-all duration-300 transform hover:scale-110 flex items-center"
          >
            <FaGithub className="w-8 h-8 mr-2" />
            <span className="text-lg">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/muhammadAhmadJawad"
            className="text-gray-200 hover:text-green-300 transition-all duration-300 transform hover:scale-110 flex items-center"
          >
            <FaLinkedin className="w-8 h-8 mr-2" />
            <span className="text-lg">LinkedIn</span>
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Home;
