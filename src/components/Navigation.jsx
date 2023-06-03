import React, { useState } from "react";
import styles from "./navigation.module.scss";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import resume from "/src/assets/resume.pdf";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`mono_para ${styles.nav}`}>
        <div>
          <Link to="/">
            <img src="/logo.png" className="icon" loading="lazy" alt="logo" />
          </Link>
        </div>
        <ol
          start={0}
          className={`${styles.navigation} ${isMenuOpen ? "open" : ""}`}
        >
          {location.pathname === "/" && (
            <>
              <li>
                <a href="#about">&nbsp;About</a>
              </li>
              <li>
                <a href="#experience">&nbsp;Experience</a>
              </li>
              <li>
                <a href="#work">&nbsp;Work</a>
              </li>
              <li>
                <a href="#contact">&nbsp;Contact</a>
              </li>
            </>
          )}
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="button compress"
            >
              Resume
            </a>
          </li>
        </ol>
        <FaBars className="icon" onClick={handleMenuToggle} />
      </nav>
    </>
  );
};

export default Navigation;
