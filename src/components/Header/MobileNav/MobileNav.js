import React, { useState } from "react";
import Link from "../Nav/Link";
import styles from "../Nav/NavLinks.module.css";
import MobileMenu from "../Nav/MobileMenu";

const MobileNav = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <React.Fragment>
      <MobileMenu
        isOpen={menuIsOpen}
        toggle={() => setMenuIsOpen(!menuIsOpen)}
        className={props.className}
      />{" "}
      {menuIsOpen && (
        <ul className={`${props.className} ${styles["links-wrapper-mobile"]}`}>
          <Link name="Product" />
          <Link name="Company" />
          <Link name="Connect" />
        </ul>
      )}
    </React.Fragment>
  );
};

export default MobileNav;
