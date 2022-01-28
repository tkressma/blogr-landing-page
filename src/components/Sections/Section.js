import React from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import ArticleInfo from "./ArticleInfo";
import styles from "./Section.module.css";

const Section = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });

  return (
    <section className={styles.section}>
      {!props.lastSection && (
        <h2 className={styles["section__h2"]}>Designed for the future</h2>
      )}

      <div
        className={classNames(
          styles["section__img_container"],
          props.lastSection && styles["section__img_container--second"]
        )}
      >
        <img
          className={styles["section__img"]}
          src={isMobile ? props.mobileImg : props.desktopImg}
          alt="Image of our blogging platform on a laptop."
        />
      </div>

      <article
        className={classNames(
          styles["section__article"],
          props.lastSection && styles["section__article--second"]
        )}
      >
        {props.sectionContent.map((content, index) => (
          <ArticleInfo key={index} title={content.title} info={content.info} />
        ))}
      </article>
    </section>
  );
};

export default Section;
