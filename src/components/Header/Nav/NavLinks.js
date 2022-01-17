import React from "react";
import styles from "./NavLinks.module.css";
import Link from "./Link";
const NavLinks = (props) => {

  return (
    <ul className={`${props.className} ${styles["links-wrapper"]}`}>
      <Link name="Product"/>
      <Link name="Company" />
      <Link name="Connect" />
    </ul>
  );
};

export default NavLinks;
