import React, { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import styles from "../Nav/NavItems.module.css";
import MobileMenu from "./MobileMenu";
import classNames from 'classnames';

const MobileNav = (props) => {
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
    setTimeout(() => {
      setMenuAnimation(!menuAnimation);
    }, 10);
  };

  // If a user clicks out of the dropdown menu, close it.

  // TODO: Fix bug where menu does not close
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

      {menuIsOpen && (
        <ul className={classNames(props.className, styles["links-wrapper-mobile"], styles.animate, menuAnimation && styles.fadein)} ref={dropdownRef} >
          <NavItem name="Product" />
          <NavItem name="Company" />
          <NavItem name="Connect" />
        </ul>
      )}
    </React.Fragment>
  );
};

export default MobileNav;
