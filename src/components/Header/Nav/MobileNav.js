import React, { useState } from "react";
import Link from "./Link";
import styles from "../Nav/NavLinks.module.css";
import MobileMenu from "./MobileMenu";

const MobileNav = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <React.Fragment>
      <MobileMenu
        isOpen={menuIsOpen}
        toggle={toggleMenu}
        className={props.className}
      />

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
