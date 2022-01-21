import React from "react";
import styles from "./DesignSection.module.css";
import illustration from "../../assets/illustration-editor-desktop.svg";
const DesignSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles["section__title"]}>Designed for the future</h2>
      <div>
        <img className={styles.img} src={illustration}></img>
      </div>
    </section>
  );
};

export default DesignSection;
