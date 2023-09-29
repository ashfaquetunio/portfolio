import React from "react";
import styles from "./navigation.module.scss";
// import resume from "/assets/resume.pdf";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className={`mono_para ${styles.nav}`}>
        <Link href="/">
          <img src="/logo.png" className="icon" loading="lazy" alt="logo" />
        </Link>

        <a
          href="/assets/resume.pdf"
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
