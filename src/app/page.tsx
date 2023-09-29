import React from "react";
import {
  Navigation,
  Landing,
  About,
  Experience,
  Work,
  Contact,
  ProjectGrid,
  Social,
} from "./../components";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <>
      <Social />
      <div className={styles.home}>
        <Navigation />
        <div style={{ position: "relative", zIndex: 0 }}>
          <Landing />
        </div>
        <About />
        <Experience />
        <Work />
        <ProjectGrid />
        <div style={{ position: "relative", zIndex: 0 }}>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
