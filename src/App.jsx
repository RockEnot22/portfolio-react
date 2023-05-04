import React from 'react';
import "./index.css";
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Home />
        <Nav />
        <About />
        <Education />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App;
