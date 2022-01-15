import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Accessibility from "../Accessibility";
import MobileNav from "../MobileNav/MobileNav";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <nav className={styles.navbar}>
      <Logo className={styles["navbar--left"]} />
      {!isMobile && <NavLinks className={styles["navbar--middle"]} />}
      {!isMobile && (
        <Accessibility className={styles["navbar--right"]} nav="true" />
      )}
      {isMobile && <MobileNav className={styles["navbar--right"]} />}
    </nav>
  );
};

export default Nav;
