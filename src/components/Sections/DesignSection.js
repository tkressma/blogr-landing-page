import React from "react";
import { useMediaQuery } from "react-responsive";

import styles from "./DesignSection.module.css";
import illustration__desktop from "../../assets/illustration-editor-desktop.svg";
import illustration__mobile from "../../assets/illustration-editor-mobile.svg";
const DesignSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <section className={styles.section}>
      <h2 className={styles["section__h2"]}>Designed for the future</h2>
      <div className={styles["section__img_container"]}>
        <img
          className={styles["section__img"]}
          src={isMobile ? illustration__mobile : illustration__desktop}
        />
      </div>

      <article class={styles["section__article"]}>
        <h3 className={styles["section__h3"]}>
          Introducing an extensible editor
        </h3>
        <p className={styles["section__info"]}>
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>

        <h3 className={styles["section__h3"]}> Robust content management</h3>
        <p className={styles["section__info"]}>
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </article>
    </section>
  );
};

export default DesignSection;
