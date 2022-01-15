import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Accessibility from "../Accessibility";
import MobileMenu from "./MobileMenu";

const Nav = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => setMenuIsOpen(!menuIsOpen);

  return (
    <nav className={styles.navbar}>
      <Logo className={styles["navbar--left"]} />
      <NavLinks
        className={styles["navbar--middle"]}
        isMobile={isMobile}
        menuOpen={menuIsOpen}
      />
      {!isMobile && (
        <Accessibility className={styles["navbar--right"]} nav="true" />
      )}
      {isMobile && <MobileMenu toggle={toggleMenu} isOpen={menuIsOpen} />}
    </nav>
  );
};

export default Nav;
