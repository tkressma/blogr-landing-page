import React from "react";
import styles from "./NavSubMenu.module.css";
import classNames from "classnames";
const NavSubMenu = (props) => {
  return (
    <ul className={classNames(styles.submenu, props.active && styles.fadein)}>
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
