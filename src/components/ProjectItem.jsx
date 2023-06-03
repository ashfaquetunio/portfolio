import React from "react";
import styles from "./projectitem.module.scss";

const ProjectItem = ({ data, reverse }) => {
  const { img, title, desc, techs } = data;
  return (
    <>
      <a href={data.link} target="_blank">
        <div className={styles.project_item_wrapper}>
          <article
            className={styles.project_item}
            style={reverse && { flexDirection: "row-reverse" }}
          >
            <div className={styles.left}>
              <div className={styles.img_box}>
                <img src={img} loading="lazy" alt="Asijo Bali Project Photo" />
              </div>
            </div>
            <div
              className={styles.right}
              style={reverse && { alignItems: "flex-start" }}
            >
              <p className="green mono_para">Featured Project</p>
              <a href="#" className="link_title">
                {title}
              </a>
              <div className="box ">
                <p className="para" style={reverse && { textAlign: "start" }}>
                  {desc}
                </p>
              </div>
              <ul className={styles.tech_list}>
                {techs.map((tech) => {
                  return (
                    <>
                      <li>{tech}</li>
                    </>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </a>
    </>
  );
};

export default ProjectItem;
