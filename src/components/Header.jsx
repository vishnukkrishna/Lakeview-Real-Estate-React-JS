import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id="Header"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-30"></div>
      {/* Navbar */}
      <Navbar />

      {/* Header Content */}
      <div className="container text-center mx-auto py-4 px-6 md:px20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore Homes That Fit Your Dreams
        </h2>

        <p className="text-xl sm:text-3xl md:text-[28px] inline-block max-w-2xl font-medium pt-4">
          Discover properties crafted with passion, tailored to meet your
          lifestyle and aspirations.
        </p>

        <div className="space-x-6 mt-10">
          <a
            href="#Projects"
            className="inline-block px-8 py-3 rounded-full border border-white text-white font-medium transition duration-300 transform hover:bg-white hover:text-gray-800 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="inline-block px-8 py-3 rounded-full bg-blue-800 text-white font-medium transition duration-300 transform hover:bg-blue-600 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
