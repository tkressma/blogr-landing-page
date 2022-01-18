import React, { useState } from "react";
import styles from "./NavLinks.module.css";
import Link from "./Link";
const NavLinks = (props) => {
  const items = ["Product", "Company", "Connect"];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    activeIndex === index ? setActiveIndex(null) : 
    setActiveIndex(index);
  }

  return (
    <ul className={`${props.className} ${styles["links-wrapper"]}`}>
    {items.map((item, index) => <Link key={index} name={item} active={index === activeIndex} onClick={() => handleActive(index)}/>)}
    </ul>
  );
};

export default NavLinks;
