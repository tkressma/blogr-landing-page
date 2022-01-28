import React, { useState, useEffect, useRef } from "react";
import styles from "./NavItem.module.css";
import classNames from "classnames";
import NavSubMenu from "./NavSubMenu";
import lightArrow from "../../../assets/icon-arrow-light.svg";

const NavItem = (props) => {
  const [menuActive, setMenuActive] = useState(false);
  const navItemRef = useRef(null);

  const handleMenuActive = () => {
    if (!menuActive) {
      props.onClick();
      setMenuActive(true);
    } else if (menuActive) {
      props.removeActive();
      setMenuActive(false);
    }
  };

  // If a user clicks out of the dropdown menu, close it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navItemRef.current &&
        menuActive &&
        !navItemRef.current.contains(event.target)
      ) {
        handleMenuActive();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <li
      className={classNames(styles.item, props.active && styles.active)}
      onClick={handleMenuActive}
      ref={navItemRef}
    >
      {props.name}
      <img
        className={classNames(styles.animate, props.active && styles.rotate)}
        src={lightArrow}
        alt="Arrow for dropdown menu."
      />
      {props.active && <NavSubMenu subItems={props.subItems} />}
    </li>
  );
};

export default NavItem;
