import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
      <Footer
        scrollToSection={scrollToSection}
        refs={{ aboutRef, homeRef, skillsRef, contactRef, projectRef }}
      />
    </>
  );
}

export default App;
