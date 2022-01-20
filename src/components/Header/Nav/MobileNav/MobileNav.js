import React, { useState, useRef, useEffect } from "react";
import MobileNavItem from "./MobileNavItem";
import styles from "./MobileNav.module.css";
import MobileNavButton from "./MobileNavButton";
import PrimaryButton from "../../../UI/PrimaryButton";
import classNames from "classnames";

const MobileNav = (props) => {
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    setActiveIndex(null);
  };

  const handleActive = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  };

  // If a user clicks out of the dropdown menu, close it.
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (event.target !== mobileMenuRef.current) {
          toggleMenu();
          setActiveIndex(null);
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <React.Fragment>
      <MobileNavButton
        isOpen={menuIsOpen}
        toggle={toggleMenu}
        className={props.className}
        ref={mobileMenuRef}
      />

      <section
        className={classNames(
          props.className,
          styles["menu-wrapper-mobile"],
          menuIsOpen ? styles.fadein : ""
        )}
      >
        <ul className={styles["menu-items-list"]} ref={dropdownRef}>
          {props.navItems.map((item, index) => (
            <MobileNavItem
              key={index}
              name={item.title}
              subItems={item.subItems}
              active={index === activeIndex}
              onClick={() => handleActive(index)}
            />
          ))}
        </ul>

        <a href="#" className={styles.login}>
          Login
        </a>
        <PrimaryButton text="Sign Up" mobileNav="true" />
      </section>
    </React.Fragment>
  );
};

export default MobileNav;
