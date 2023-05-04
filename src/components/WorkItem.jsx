import React from "react";
import styles from "./workitem.module.scss";



const WorkItem = ({data}) => {
    const {position, company, startDate, endDate, points} = data;
    return (
    <>
      <article className={styles.work_item}>
        <div className={styles.header}>
          <p className="para bold">
            <span className="white">{position}</span><span className="green"> @ {company}</span>
          </p>
          <p className="para">
            {startDate} - {endDate}
          </p>
          <ul>
            {points.map((point) => {
              return (
                <>
                  <li>{point}</li>
                </>
              );
            })}
          </ul>
        </div>
      </article>
    </>
  );
};

export default WorkItem;
