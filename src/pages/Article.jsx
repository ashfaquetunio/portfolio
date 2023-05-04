import React, { useEffect, useState } from "react";
import styles from "./article.module.scss";
import { others } from "../data";
import { useParams } from "react-router-dom";
import { Navigation } from "../components";

const Article = () => {
  const { id } = useParams();
  const article = others.find((article) => article.id == id);

  return (
    <>
      <Navigation />

      <article className={styles.article}>
        <img src={article.img} alt="Article" className={styles.image} />
        <h1 className={"link_title"}>{article.title}</h1>
        <p className={styles.body}>{article.desc}</p>
        <div className={styles.keywords}>
          {article.tags.map((tag) => {
            return (
              <>
                <span className={styles.keyword}>{tag}</span>
              </>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Article;
