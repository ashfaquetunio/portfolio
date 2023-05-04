import React from "react";
import styles from "./about.module.scss";

const About = () => {
  return (
    <>
      <section id="about" className={styles.about}>
        <div>
          <div className="section_head">
            <h2 className="section_title">About Me</h2>
            <div className="line_x"></div>
          </div>
          <div className={styles.layout}>
            <div>
              <p className="para">
                Hello! My name is Ashfaque and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2020 when I decided to try creating some custom web portions
                with html and CSS — turns out making simpler websites and then
                curiosity putting me to more complex layout made me a successful
                developer!
              </p>

              <ul className={styles.skill_set}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Nextjs</li>
                <li>Bootstrap</li>
                <li>Typescript</li>
                <li>Sass</li>
                <li>NPM</li>
                <li>VS Code</li>
                <li>Chart.js</li>
              </ul>
            </div>
            <div className="">
              <div className={styles.profile}>
                <div className="square_img">
                  <img
                    src="./src/assets/profile-center.jpg"
                    loading="lazy"
                    alt=""
                  />
                  <div className="img_outline"></div>
                  <div className="color_filter"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
