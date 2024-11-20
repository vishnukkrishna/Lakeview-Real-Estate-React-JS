import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorSize, setCursorSize] = useState("w-9 h-9");

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", moveCursor);

    const handleButtonHover = () => {
      setCursorSize("w-16 h-16");
    };

    const handleButtonLeave = () => {
      setCursorSize("w-9 h-9");
    };

    document.body.addEventListener(
      "mouseenter",
      (e) => {
        if (e.target.tagName === "BUTTON") {
          handleButtonHover();
        }
      },
      true
    );

    document.body.addEventListener(
      "mouseleave",
      (e) => {
        if (e.target.tagName === "BUTTON") {
          handleButtonLeave();
        }
      },
      true
    );

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      className={`fixed ${cursorSize} border-2 border-[#7c7b7b] rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150`}
    ></div>
  );
};

export default CustomCursor;
