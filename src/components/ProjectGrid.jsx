import React, { useState } from "react";
import ProjectBox from "./ProjectBox";
import styles from "./projectgrid.module.scss";
import { others } from "../data";
import { Tilt } from "react-tilt";

const ProjectGrid = () => {
  const [count, setCount] = useState(6);

  const handleCount = () => {
    if (count === 6) {
      setCount(others.length);
    } else {
      setCount(6);
    }
  };
  return (
    <>
      <section className={styles.project_grid}>
        <p className="link_title">Articles</p>
        <p className="green mono_para mar_b">view the archive</p>
        <div className={styles.grid}>
          {others.slice(0, count).map((other) => {
            return (
              <>
                <Tilt>
                  <ProjectBox data={other} />
                </Tilt>
              </>
            );
          })}
        </div>
        <button className="button" onClick={handleCount}>
          {count === 6 ? "Show More" : "Show Less"}
        </button>
      </section>
    </>
  );
};

export default ProjectGrid;
