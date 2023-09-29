"use client";
import React, { useEffect, useState } from "react";
import ProjectBox from "./ProjectBox";
import styles from "./projectgrid.module.scss";
import { others } from "../data";
import { Tilt } from "react-tilt";

const ProjectGrid = () => {
  const [count, setCount] = useState(3);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(others);
  }, [others]);

  const handleCount = () => {
    if (count === 3) {
      setCount(others.length);
    } else {
      setCount(3);
    }
  };
  return (
    <>
      <section className={styles.project_grid}>
        <p className="link_title">Articles</p>
        <p className="green mono_para mar_b">view the archive</p>
        <div className={styles.grid}>
          {data.slice(0, count).map((other, index) => {
            return (
              <Tilt key={index}>
                <ProjectBox data={other} />
              </Tilt>
            );
          })}
        </div>
        <button className="button" onClick={handleCount}>
          {count === 3 ? "Show More" : "Show Less"}
        </button>
      </section>
    </>
  );
};

export default ProjectGrid;
