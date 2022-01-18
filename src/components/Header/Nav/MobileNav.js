import React, { useState, useRef, useEffect } from "react";
import NavItem from "./NavItem";
import styles from "../Nav/NavItems.module.css";
import MobileMenu from "./MobileMenu";

const MobileNav = (props) => {
  const dropdownRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log(menuIsOpen)

    setMenuIsOpen(!menuIsOpen);
  };

  // If a user clicks out of the dropdown menu, close it.

  // TODO: Fix bug where menu does not close
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <MobileMenu
        isOpen={menuIsOpen}
        toggle={toggleMenu}
        className={props.className}
      />

      {menuIsOpen && (
        <ul className={`${props.className} ${styles["links-wrapper-mobile"]}`} ref={dropdownRef} >
          <NavItem name="Product" />
          <NavItem name="Company" />
          <NavItem name="Connect" />
        </ul>
      )}
    </React.Fragment>
  );
};

export default MobileNav;
