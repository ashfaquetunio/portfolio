import React from "react";
import styles from "./projectbox.module.scss";
import { CiFolderOn } from "react-icons/ci";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const ProjectBox = ({ data }) => {
  const { id, title, desc, tags } = data;

  return (
    <>
      <Link href={`/article/${id}`}>
        <article className={styles.project_box}>
          <div className={styles.header}>
            <CiFolderOn className="icon" />
            <span>
              <BsBoxArrowUpRight className="link_icon" />
            </span>
          </div>
          <div className={styles.body}>
            <p className="para green">{title}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
          <ul className={styles.tech_list}>
            {tags.map((tech, index) => {
              return (
                  <li key={index}>{tech}</li>
              );
            })}
          </ul>
        </article>
      </Link>
    </>
  );
};

export default ProjectBox;
