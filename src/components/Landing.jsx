import React from "react";
import styles from "./landing.module.scss";

const Landing = () => {
  return (
    <>
      <section id="landing" className={styles.landing}>
        <div>
          <p className="green mono_para">Hi, My name is</p>
          <h1 className="title">Ashfaque Ahmed<br />Frontend Developer</h1>
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
   
      </section>
    </>
  );
};

export default Landing;
