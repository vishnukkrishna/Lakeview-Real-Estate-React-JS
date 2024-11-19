import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX }}
      />
      <div className="w-full overflow-y-auto">
        <ToastContainer />
        <Header />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <BackToTopButton />
    </>
  );
}

export default App;
