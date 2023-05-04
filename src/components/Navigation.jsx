import React from "react";
import styles from "./navigation.module.scss";
import resume from "/src/assets/resume.pdf";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <>
      <nav className={`mono_para ${styles.nav}`}>
        <div>
          <Link to="/">
            <img src="/logo.png" className="icon" loading="lazy" alt="logo" />
          </Link>
        </div>
        <ol start={0} className={styles.navigation}>
          {location.pathname == "/" && (
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
            <a href={resume} target="_blank" className="button compress">
              Resume
            </a>
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Navigation;
