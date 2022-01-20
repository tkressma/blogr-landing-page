import React, { useState } from "react";
import styles from "./MobileNavSubMenu.module.css";
import classNames from "classnames";
const MobileNavSubMenu = (props) => {
  // Slight delay before applying the fadein animation class to allow
  // it to actually work. If the component were rendered with the fadein class
  // already applied, the animation would not work.
  const [fade, setFade] = useState(false);
  setTimeout(() => {
    setFade(true);
  }, 1);

  return (
    <section className={classNames(styles.submenu, fade && styles.fadein)}>
      <ul className={styles["submenu__list"]}>
        {props.subItems.map((item) => (
          <li className={styles["submenu__item"]}>{item}</li>
        ))}
      </ul>
    </section>
  );
};
export default MobileNavSubMenu;
