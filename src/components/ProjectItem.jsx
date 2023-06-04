import React from "react";
import styles from "./projectitem.module.scss";
import { AiFillHeart } from "react-icons/ai";

const ProjectItem = ({ data, reverse = false }) => {
  const { img, title, desc, techs } = data;
  return (
    <>
      <a href={data.link} target="_blank">
        <div className={styles.project_item_wrapper}>
          <article
            className={styles.project_item}
            style={reverse ? { flexDirection: "row-reverse" } : {}}
          >
            <div
              className={styles.right}
              style={reverse ? { alignItems: "flex-start" } : {}}
            >
              <p className="green mono_para">Featured Project</p>
              <a href="#" className="link_title">
                {title}
              </a>
              <div className="box">
                <p className="para">{desc}</p>
              </div>
            </div>
            <div className={styles.left}>
              <div className={styles.img_box}>
                <p className={styles.thanks}>
                  <AiFillHeart />
                </p>
                <img src={img} loading="lazy" alt="Asijo Bali Project Photo" />
              </div>
            </div>
          </article>
        </div>
      </a>
    </>
  );
};

export default ProjectItem;
