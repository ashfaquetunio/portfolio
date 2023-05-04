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

const Home = () => {
  return (
    <>
      <Social />
      <div className={styles.home}>
        <Navigation />
        <Landing />
        <About />
        <Experience />
        <Work />
        <ProjectGrid />
        <Contact />
      </div>
    </>
  );
};

export default Home;
