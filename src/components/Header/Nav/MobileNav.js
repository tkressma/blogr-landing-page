import React, { useState, useRef, useEffect } from "react";
import MobileNavItem from "./MobileNavItem";
import styles from "../Nav/NavItems.module.css";
import MobileMenu from "./MobileMenu";
import classNames from 'classnames';

const MobileNav = (props) => {
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const items = ["Product", "Company", "Connect"];

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    setTimeout(() => {
      setMenuAnimation(!menuAnimation);
    }, 10);
  };

  const handleActive = (index) => {
    activeIndex === index ? setActiveIndex(null) : setActiveIndex(index);
  }

  // If a user clicks out of the dropdown menu, close it.
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (event.target !== mobileMenuRef.current) toggleMenu();
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <React.Fragment>
      <MobileMenu
        isOpen={menuIsOpen}
        toggle={toggleMenu}
        className={props.className}
        ref={mobileMenuRef}
      />

      
        <ul className={classNames(props.className, styles["links-wrapper-mobile"], !menuIsOpen && styles.fadeout)} ref={dropdownRef} >

        {items.map((item, index) => <MobileNavItem key={index} name={item} active={index===activeIndex} onClick={() => handleActive(index)}/>)}

        </ul>
      
    </React.Fragment>
  );
};

export default MobileNav;
