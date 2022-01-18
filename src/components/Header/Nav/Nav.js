import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Accessibility from "../Accessibility";
import MobileNav from "./MobileNav";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className={styles.navbar}>
      <Logo className={styles["navbar--left"]} />
      {!isMobile && <NavItems className={styles["navbar--middle"]} />}
      {!isMobile && (
        <Accessibility className={styles["navbar--right"]} nav="true" />
      )}
      {isMobile && <MobileNav className={styles["navbar--right"]} />}
    </nav>
  );
};

export default Nav;
