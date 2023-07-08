import React from "react";
import styles from "./navigation.module.scss";
import { Link } from "react-router-dom";
import resume from "/src/assets/resume.pdf";

const Navigation = () => {
  return (
    <>
      <nav className={`mono_para ${styles.nav}`}>
        <Link to="/">
          <img src="/logo.png" className="icon" loading="lazy" alt="logo" />
        </Link>

        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="button compress"
        >
          Resume
        </a>
      </nav>
    </>
  );
};

export default Navigation;
