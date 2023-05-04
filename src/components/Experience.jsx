import React from "react";
import styles from "./experience.module.scss";
import Tabs from "./Tabs";
import WorkItem from "./WorkItem";
import { work } from "../data";
import { useState } from "react";

const Experience = () => {
  const [tab, setTab] = useState(1);

  return (
    <>
      <section id="experience" className={styles.experience}>
        <div>
          <p className="section_title">Where I’ve Worked</p>
          <div className={styles.layout}>
            <Tabs tab={tab} setTab={setTab}/>
            {work.map((item) => {
              if (item.id === tab) {
                return (
                  <>
                    <WorkItem key={item.id} data={item} />
                  </>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
