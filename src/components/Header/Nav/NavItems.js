import React, { useState } from "react";
import styles from "./NavItems.module.css";
import Link from "./NavItem";
const NavItems = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    activeIndex === index ? setActiveIndex(null) : 
    setActiveIndex(index);
  }

  return (
    <ul className={`${props.className} ${styles["links-wrapper"]}`}>
    {props.navItems.map((item, index) => <Link key={index} name={item.title} active={index === activeIndex} onClick={() => handleActive(index)}/>)}
    </ul>
  );
};

export default NavItems;
