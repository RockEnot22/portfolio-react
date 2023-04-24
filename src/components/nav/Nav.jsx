import React from "react";
import "./nav.css";
import { FaHome, FaUserAstronaut, FaBookReader, FaCodeBranch, FaRocketchat } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className="nav">
      <a href="#"
      onClick={() => setActiveNav('#')}
      className = {activeNav === '#'? 'active' : ''}><FaHome /></a>

      <a href="#about" 
      onClick={() => setActiveNav('#about')}
      className = {activeNav === '#about'? 'active' : ''}><FaUserAstronaut /></a>
      
      <a href="#experience"
      onClick={() => setActiveNav('#education')}
      className = {activeNav === '#education'? 'active' : ''}><FaBookReader /></a>
      <a href="#portfolio"
      onClick={() => setActiveNav('#portfolio')}
      className = {activeNav === '#portfolio'? 'active' : ''}><FaCodeBranch /></a>
      <a href="#contact"
      onClick={() => setActiveNav('#contact')}
      className = {activeNav === '#contact'? 'active' : ''}><FaRocketchat /></a>
    </nav>
  )
}

export default Nav