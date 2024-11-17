import React from "react";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center mx-auto py-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          className="w-full sm:w-1/2 max-w-lg"
          alt=""
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 pl-7 md:pl-0">
            <div className="">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="">Years of Excellence</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="">Projects Completed</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="">Mn. Sq. Ft. Delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg pl-4 md:pl-0">
            We are committed to excellence in every project, ensuring quality
            and dedication in every detail. Whether delivering spaces for
            living, working, or leisure, we’re passionate about bringing
            aspirations to life. Join us on a journey where design meets
            functionality and innovation meets trust.
          </p>
          <button className="rounded-full bg-blue-800 font-medium transition duration-300 transform hover:bg-blue-600 hover:scale-100 shadow-sm hover:shadow-lg text-white px-8 py-2">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
