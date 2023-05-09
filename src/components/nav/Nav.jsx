import React, { useState } from "react";
import "./nav.css";
import {
  FaHome,
  FaUserAstronaut,
  FaBookReader,
  FaCodeBranch,
  FaRocketchat,
} from "react-icons/fa";
import { MdOutlineLegendToggle } from "react-icons/md";

const Nav = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <FaHome />
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <FaUserAstronaut />
                </a>
              </li>

              <li className="nav__item">
                <a href="#education" className="nav__link">
                  <FaBookReader />
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <FaCodeBranch />
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <FaRocketchat />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">© 2023</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <MdOutlineLegendToggle />
      </div>
    </>
  );
};

export default Nav;
