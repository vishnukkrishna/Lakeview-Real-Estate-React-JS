import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1280) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="container mx-auto py-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Project Slider Buttons */}
      <div className="flex justify-center md:justify-end space-x-4 mb-6">
        <button
          onClick={prevProject}
          className="p-3 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 transform hover:rotate-[-10deg] hover:shadow-2xl"
          aria-label="Previous Project"
        >
          <img
            src={assets.left_arrow}
            alt="Previous"
            className="w-4 h-4 filter invert"
          />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 transform hover:rotate-[10deg] hover:shadow-2xl"
          aria-label="Next Project"
        >
          <img
            src={assets.right_arrow}
            alt="Next"
            className="w-4 h-4 filter invert"
          />
        </button>
      </div>

      {/* Project Slider Container */}
      <div className="overflow-hidden relative py-8 px-4">
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 cursor-pointer"
            >
              <div className="overflow-hidden rounded-xl shadow-lg group relative transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"
                />
                {/* Overlay Text on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center">
                  <div>
                    <h2 className="text-xl font-semibold">{project.title}</h2>
                    <p className="text-gray-300 text-sm">{project.location}</p>
                    <p className="mt-2 font-medium">{project.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center space-x-3 mt-8">
          {projectsData.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform ${
                idx === currentIndex
                  ? "bg-blue-600 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-blue-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
