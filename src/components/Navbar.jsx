import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`w-full fixed top-0 left-0 z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        <motion.img
          src={assets.logo}
          alt="Logo"
          className="w-36 h-10 sm:w-44 lg:w-44 sm:h-12 lg:h-12 cursor-pointer"
          id="Home"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <ul className="hidden md:flex gap-7 text-white text-lg font-semibold relative">
          {["Home", "About", "Projects", "Testimonials"].map((item, index) => (
            <motion.li
              key={index}
              className="group relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className="relative cursor-pointer hover:text-gray-400 transition-all"
              >
                {item}
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[2px] bg-gray-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </motion.li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="hidden md:block px-6 py-2 sm:px-8 sm:py-3 md:px-8 md:py-2 rounded-lg border border-white text-white font-semibold bg-transparent shadow-md transition-all hover:bg-white hover:text-gray-800"
        >
          Sign Up
        </motion.button>

        <motion.img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-8 cursor-pointer"
          alt="Menu Icon"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden fixed top-0 right-0 bottom-0 z-20 ${
          showMobileMenu ? "block" : "hidden"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showMobileMenu ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => setShowMobileMenu(false)}
      />

      <motion.div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-2/3 bg-gray-100 overflow-hidden rounded-l-3xl`}
        initial={{ x: "100%" }}
        animate={{ x: showMobileMenu ? "0" : "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <motion.img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="Close Icon"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Menu Items */}
        <motion.ul
          className="flex flex-col items-center gap-6 mt-10 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: showMobileMenu ? 1 : 0 }}
          transition={{ staggerChildren: 0.1, duration: 0.3 }}
        >
          {["Home", "About", "Projects", "Testimonials"].map((item, index) => (
            <motion.li
              key={index}
              className="group relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                  setShowMobileMenu(false);
                }}
                href={`#${item}`}
                className="relative cursor-pointer hover:text-gray-400 hover:font-bold transition-all"
              >
                {item}
                <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-0 h-[2px] bg-gray-400 group-hover:w-full transition-all duration-300 ease-out"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <div className="flex justify-center mt-6 mb-6">
          <motion.button
            className="px-8 py-3 rounded-lg border text-white font-semibold bg-black hover:bg-gray-800 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Sign Up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
