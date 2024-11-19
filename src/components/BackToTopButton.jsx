import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setIsRotated(true);

    setTimeout(() => {
      setIsRotated(false);
    }, 500);
  };

  return (
    <motion.button
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-6 right-10 bg-gradient-to-br from-blue-800 to-indigo-600 text-white p-4 rounded-full shadow-lg z-50`}
      aria-label="Back to Top"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
        animate={{
          rotate: isRotated ? 180 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M19 9l-7 7-7-7"
        />
      </motion.svg>
    </motion.button>
  );
};

export default BackToTopButton;
