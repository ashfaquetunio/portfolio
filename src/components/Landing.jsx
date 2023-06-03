import React from "react";
import styles from "./landing.module.scss";
import AnimatedTitle from "./AnimatedTitle";
import EarthCanvas from "./canvas/Earth";
import StarsCanvas from "./canvas/Stars";

const Landing = () => {
  return (
    <>
      <section id="landing" className={styles.landing}>
        <div>
          <p className="green mono_para">Hi, My name is</p>
          <AnimatedTitle />
          <p className="para">
            I’m a frontend engineer specializing in building (and occasionally
            modifying) exceptional digital experiences. Currently, I’m focused
            on developing accessible, human-centered UIs at{" "}
            <span className="green">Pluton</span>.
          </p>
          <a href="#" className="button mar-y">
            Check Out My Profile
          </a>
        </div>
        <div>
          <EarthCanvas />
        </div>
      </section>
    </>
  );
};

export default Landing;
