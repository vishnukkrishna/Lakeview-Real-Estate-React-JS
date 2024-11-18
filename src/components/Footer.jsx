import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-12 px-6 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            className="w-44 h-12 cursor-pointer"
            src={assets.logo}
            alt="Lakeview Logo"
          />
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            At Lakeview, we specialize in connecting people with their dream
            properties. From family homes to luxury estates, we’re committed to
            delivering outstanding service and expertise in the real estate
            market. Whether you're buying or selling, we're here to help you
            every step of the way.
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <a
              href="#Home"
              className="hover:text-white transition-all duration-300 text-sm"
            >
              Home
            </a>
            <a
              href="#About"
              className="hover:text-white transition-all duration-300 text-sm"
            >
              About Us
            </a>
            <a
              href="#Contact"
              className="hover:text-white transition-all duration-300 text-sm"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="hover:text-white transition-all duration-300 text-sm"
            >
              Privacy Policy
            </a>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 mb-4 text-sm">
            Get the latest news, articles, and real estate tips directly to your
            inbox every week. Stay up to date with the trends in the market!
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <input
              className="p-3 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-72"
              type="email"
              placeholder="Enter your email"
            />
            <button className="py-3 px-6 rounded bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
          <div className="flex justify-start mt-6 gap-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/vishnu_k_krishna/"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/vishnukrishnakumar/"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm">
        Copyright {new Date().getFullYear()} © Lakeview. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
