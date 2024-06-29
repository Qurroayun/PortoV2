import { useEffect, useState } from "react";
import Navbar from "./Navigation/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Navigation/Footer";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <div className="mt-10">
        <Skills />
      </div>
      <div className="mt10">
        <Project />
      </div>
      <div className="mt10">
        <Experience />
      </div>
      <Footer />
    </div>
  );
}

export default App;
