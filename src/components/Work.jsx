import React from "react";
import ProjectItem from "./ProjectItem";
import styles from "./work.module.scss";
import { projects } from "../data";

const Work = () => {
  return (
    <>
      <section id="work" className={styles.work}>
        <div>
          <p className="section_title">Some Things I’ve Built</p>
          {projects.map((project, index) => {
            return (
              <>
                <ProjectItem
                  data={project}
                  reverse={index % 2 == 0 ? true : false}
                />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Work;
