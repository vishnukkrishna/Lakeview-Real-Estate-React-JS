import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div
      className="relative min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.jpg')" }}
      id="Header"
    >
      <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
      {/* Navbar */}
      <Navbar />

      {/* Header Content */}
      <div className="container text-center mx-auto relative z-10 py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-4xl sm:text-5xl md:text-[82px] max-w-3xl mx-auto font-semibold pt-20 tracking-wide leading-tight">
          Explore Homes That Fit Your Dreams
        </h2>

        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto text-gray-300">
          Discover properties crafted with passion, tailored to meet your
          lifestyle and aspirations.
        </p>

        <div className="space-x-6 mt-12">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded-full text-white font-medium transition duration-300 hover:bg-white hover:text-gray-800"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-blue-600 px-8 py-3 rounded-full text-white font-medium transition duration-300 hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
