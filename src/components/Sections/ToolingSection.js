import React from "react";
import styles from "./ToolingSection.module.css";
import illustration__desktop from "../../assets/illustration-laptop-desktop.svg";
import illustration__mobile from "../../assets/illustration-laptop-mobile.svg";

const ToolingSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles["section__img_container"]}>
        <img className={styles["section__img"]} src={illustration__mobile} />
      </div>
      <article className={styles["section__article"]}>
        <h3 className={styles["section__h3"]}>Free, Open, Simple</h3>
        <p className={styles["section__info"]}>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h3 className={styles["section__h3"]}>Powerful Tooling</h3>
        <p className={styles["section__info"]}>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </article>
    </section>
  );
};

export default ToolingSection;
