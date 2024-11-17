import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for forward, -1 for reverse
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Reverse direction at the end or start
        if (prevIndex === projectsData.length - cardsToShow) {
          setScrollDirection(-1);
        } else if (prevIndex === 0) {
          setScrollDirection(1);
        }

        return prevIndex + scrollDirection;
      });
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [scrollDirection, cardsToShow]);

  const nextProject = () => {
    setScrollDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setScrollDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  // Drag start handler
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  // Drag end handler
  const handleDragEnd = (e) => {
    if (!isDragging) return;

    const endX = e.clientX || e.changedTouches[0].clientX;
    const dragDistance = endX - startX;

    if (dragDistance > 50) {
      // Dragged right, go to previous project
      prevProject();
    } else if (dragDistance < -50) {
      // Dragged left, go to next project
      nextProject();
    }

    setIsDragging(false);
  };

  // Prevent default scrolling when dragging on touch screens
  const handleTouchMove = (e) => {
    if (isDragging) e.preventDefault();
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-14 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-10 max-w-lg mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>
      <div
        className="container mx-auto py-3 px-6 md:px-20 lg:px-28 w-full overflow-hidden flex"
        id="Projects"
        style={{ userSelect: "none" }}
      >
        {/* Project Slider Container */}
        <div
          className="flex-grow overflow-hidden relative py-8 px-4"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
          onTouchMove={handleTouchMove}
          style={{ userSelect: "none" }}
        >
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
                style={{ userSelect: "none" }}
              >
                <div className="overflow-hidden rounded-xl shadow-lg group relative transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover transition duration-500 transform group-hover:scale-110"
                    style={{ userSelect: "none" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-center">
                    <div>
                      <h2 className="text-xl font-semibold">{project.title}</h2>
                      <p className="text-gray-300 text-sm">
                        {project.location}
                      </p>
                      <p className="mt-2 font-medium">{project.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Sidebar with Navigation Buttons */}
          <div className="flex items-center justify-center space-x-4 pr-6 pt-6">
            <button
              onClick={prevProject}
              className="p-3 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 transform hover:rotate-[-10deg] hover:shadow-xl"
              aria-label="Previous Project"
              style={{ userSelect: "none" }}
            >
              <img
                src={assets.left_arrow}
                alt="Previous"
                className="w-3 h-3 filter invert"
              />
            </button>

            {/* Thumbnail Navigation */}
            <div className="flex items-center space-x-2">
              {projectsData.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                    idx === currentIndex
                      ? "bg-blue-800 scale-125 shadow-lg"
                      : "bg-gray-300 hover:bg-blue-800"
                  }`}
                  style={{ userSelect: "none" }}
                ></span>
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 bg-gradient-to-r from-blue-800 to-indigo-800 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 transform hover:rotate-[10deg] hover:shadow-xl"
              aria-label="Next Project"
              style={{ userSelect: "none" }}
            >
              <img
                src={assets.right_arrow}
                alt="Next"
                className="w-3 h-3 filter invert"
              />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
