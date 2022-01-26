import React from "react";
import styles from "./ArticleInfo.module.css";

const ArticleInfo = (props) => {
  return (
    <React.Fragment>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.info}>{props.info}</p>
    </React.Fragment>
  );
};

export default ArticleInfo;
