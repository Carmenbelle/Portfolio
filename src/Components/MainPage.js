import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Body from "./Body";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

function MainPage() {
  return (
    <>
      <section className="bg-[rgb(238,242,255)]">
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </>
  );
}

export default MainPage;
