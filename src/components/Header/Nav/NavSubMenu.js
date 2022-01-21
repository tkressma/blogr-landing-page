import React, { useState } from "react";
import styles from "./NavSubMenu.module.css";
import classNames from "classnames";
const NavSubMenu = (props) => {
  // Slight delay before applying the fadein animation class to allow
  // it to actually work. If the component were rendered with the fadein class
  // already applied, the animation would not work.
  const [fade, setFade] = useState(false);
  setTimeout(() => {
    setFade(true);
  }, 1);

  return (
    <ul className={classNames(styles.submenu, fade && styles.fadein)}>
      {props.subItems.map((subItem, index) => (
        <li key={index} className={styles["submenu__item"]}>
          <a href="#" className={styles["submenu__item_link"]}>
            {subItem}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default NavSubMenu;
