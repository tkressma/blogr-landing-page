import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import NavItems from "./NavItems";
import Accessibility from "../Accessibility";
import MobileNav from "./MobileNav/MobileNav";

const Nav = () => {
  const navItems = [
    {title: "Product",
  subItems: ["Overview", "Pricing", "Marketplace", "Intergrations"]},
  {title: "Company",
subItems: ["About", "Team", "Blog", "Careers"]},
{title: "Connect",
subItems: ["Contact","Newsletter","LinkedIn"]}
]
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className={styles.navbar}>
      <Logo className={styles["navbar--left"]} />
      {!isMobile && <NavItems className={styles["navbar--middle"]} navItems={navItems} />}
      {!isMobile && (
        <Accessibility className={styles["navbar--right"]} nav="true" />
      )}
      {isMobile && <MobileNav className={styles["navbar--right"]} navItems={navItems}/>}
    </nav>
  );
};

export default Nav;
