import React from "react";
import { useMediaQuery } from "react-responsive";
import ArticleInfo from "./ArticleInfo";
import styles from "./DesignSection.module.css";
import illustration__desktop from "../../assets/illustration-editor-desktop.svg";
import illustration__mobile from "../../assets/illustration-editor-mobile.svg";
const DesignSection = () => {
  const sectionContent = [
    {
      title: "Introducing an extensible editor",
      info: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    },
    {
      title: "Robust content management",
      info: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
    },
  ];
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

      <article className={styles["section__article"]}>
        {sectionContent.map((content) => (
          <ArticleInfo title={content.title} info={content.info} />
        ))}
      </article>
    </section>
  );
};

export default DesignSection;
