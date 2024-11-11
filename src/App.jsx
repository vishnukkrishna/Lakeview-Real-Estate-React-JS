import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
    </div>
  );
}

export default App;
