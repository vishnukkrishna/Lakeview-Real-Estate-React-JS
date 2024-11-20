import React from "react";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FaHome, FaCity, FaSmile } from "react-icons/fa";
import headerImage from "../assets/header_img.jpg";

const Header = () => {
  return (
    <header
      id="Home"
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center w-full overflow-hidden"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

      {/* Navbar */}
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl px-6 text-white relative"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-wide text-white  bg-clip-padding p-2">
          Find Your Perfect Home
        </h1>

        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-white">
          Discover Luxury, Comfort, and Modern Design
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-10">
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaHome className="text-3xl text-white" />
            <span className="text-3xl md:text-4xl font-bold text-white">
              200+
            </span>
            <p className="text-sm md:text-base font-medium text-gray-200">
              Projects
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaCity className="text-3xl text-white" />
            <span className="text-3xl md:text-4xl font-bold text-white">
              50+
            </span>
            <p className="text-sm md:text-base font-medium text-gray-200">
              Cities Covered
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <FaSmile className="text-3xl text-white" />
            <span className="text-3xl md:text-4xl font-bold text-white">
              10K+
            </span>
            <p className="text-sm md:text-base font-medium text-gray-200">
              Happy Clients
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <motion.a
            href="#Projects"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-3 rounded-3xl border border-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md transition-all hover:shadow-lg hover:brightness-110"
          >
            Explore Projects
          </motion.a>

          <motion.a
            href="#Contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-8 py-3 rounded-3xl border border-white text-white font-semibold bg-transparent shadow-md transition-all hover:bg-white hover:text-gray-800"
          >
            Get in Touch
          </motion.a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
