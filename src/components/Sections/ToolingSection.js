import React from "react";
import styles from "./ToolingSection.module.css";
import illustration__desktop from "../../assets/illustration-laptop-desktop.svg";
import illustration__mobile from "../../assets/illustration-laptop-mobile.svg";
import ArticleInfo from "./ArticleInfo";

const ToolingSection = () => {
  const sectionContent = [
    {
      title: "Free, Open, Simple",
      info: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    },
    {
      title: "Powerful Tooling",
      info: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles["section__img_container"]}>
        <img className={styles["section__img"]} src={illustration__mobile} />
      </div>
      <article className={styles["section__article"]}>
        {sectionContent.map((content) => (
          <ArticleInfo title={content.title} info={content.info} />
        ))}
      </article>
    </section>
  );
};

export default ToolingSection;
