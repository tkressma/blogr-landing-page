import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Nav.module.css";
import Logo from "./Logo";
import NavItem from "./NavItem";

import Accessibility from "../Accessibility";
import MobileNav from "./MobileNav/MobileNav";

const Nav = () => {
  const navItems = [
    {
      title: "Product",
      subItems: ["Overview", "Pricing", "Marketplace", "Intergrations"],
    },
    { title: "Company", subItems: ["About", "Team", "Blog", "Careers"] },
    { title: "Connect", subItems: ["Contact", "Newsletter", "LinkedIn"] },
  ];
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  return (
    <nav className={styles.navbar}>
      <Logo className={styles["navbar--left"]} />
      {!isMobile && (
        <ul
          className={`${styles["navbar--middle"]} ${styles["navbar-wrapper"]}`}
        >
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              name={item.title}
              active={index === activeIndex}
              onClick={() => handleActive(index)}
              subItems={item.subItems}
            />
          ))}
        </ul>
      )}
      {!isMobile && (
        <Accessibility className={styles["navbar--right"]} nav="true" />
      )}
      {isMobile && (
        <MobileNav className={styles["navbar--right"]} navItems={navItems} />
      )}
    </nav>
  );
};

export default Nav;
