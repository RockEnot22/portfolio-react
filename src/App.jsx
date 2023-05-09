import React from "react";
import "./index.css";
import PopupWeather from "./components/popupWeather/PopupWeather";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Education from "./components/education/Education";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <PopupWeather />
      <Home />
      <Nav />
      <About />
      <Education />
      <Portfolio />
      <Contact />
    </>
  );
}

export default App;
