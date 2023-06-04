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
} from "../components";
import styles from "./home.module.scss";
import StarsCanvas from "../components/canvas/Stars";

const Home = () => {
  return (
    <>
      <Social />
      <div className={styles.home}>
        <Navigation />
        <div style={{ position: "relative", zIndex: 0 }}>
          <Landing />
          <StarsCanvas />
        </div>
        <div style={{ position: "relative", zIndex: 0 }}>
          <About />
          <StarsCanvas />
        </div>
        <div style={{ position: "relative", zIndex: 0 }}>
          <Experience />
          <StarsCanvas />
        </div>
        <div style={{ position: "relative", zIndex: 0 }}>
          <Work />
          <StarsCanvas />
        </div>
        <div style={{ position: "relative", zIndex: 0 }}>
          <ProjectGrid />
          <StarsCanvas />
        </div>
        <div style={{ position: "relative", zIndex: 0 }}>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
};

export default Home;
