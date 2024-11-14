import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <div
      className="container mx-auto py-14 lg:px-20 xl:px-32 w-full bg-gray-50"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-2 font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-xs border border-gray-200 shadow-lg rounded-lg p-6 bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-20 h-20 rounded-full border-4 border-indigo-100 mb-4"
              />
              <h2 className="text-xl font-medium text-gray-700 mb-1">
                {testimonial.name}
              </h2>
              <p className="text-sm text-indigo-500 mb-4">
                {testimonial.title}
              </p>
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <img
                    key={idx}
                    src={assets.star_icon}
                    alt="Star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
