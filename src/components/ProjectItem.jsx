import React from "react";
import styles from "./projectitem.module.scss";
import { AiFillHeart } from "react-icons/ai";
import Link from "next/link";

const ProjectItem = ({ data }) => {
  const { img, title, desc, techs } = data;
  return (
      <Link href={data.link} target="_blank">
        <div className={styles.project_item_wrapper}>
          <article
            className={styles.project_item}
          >
             <div className={styles.left}>
              <div className={styles.img_box}>
                <p className={styles.thanks}>
                  <AiFillHeart />
                </p>
                <img src={img} loading="lazy" alt="Asijo Bali Project Photo" />
              </div>
            </div>
            <div
              className={styles.right}
            >
              <p className="green mono_para">Featured Project</p>
                {title}
              <p
                className="para"
              >
                {desc}
              </p>
            </div>
          </article>
        </div>
      </Link>
  );
};

export default ProjectItem;
