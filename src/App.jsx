import React from 'react';
import "./index.css";
import Header from './components/header/Header';
import Skills from './components/skills/Skills';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/Education';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
        <Header />
        <Skills />
        <Nav />
        <About />
        <Education />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App;
