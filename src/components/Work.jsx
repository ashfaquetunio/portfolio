"use client"
import React, { use, useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";
import styles from "./work.module.scss";
import { projects } from "../data";

const Work = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(projects);
  }, [projects]);
  return (
    <section id="work" className={styles.work}>
      <div>
        <p className="section_title">Some Things I’ve Built</p>
        {data.map((project, index) => {
          return <ProjectItem key={index} data={project} />;
        })}
      </div>
    </section>
  );
};

export default Work;
