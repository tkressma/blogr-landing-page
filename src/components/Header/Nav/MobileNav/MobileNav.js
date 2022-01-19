import React, { useState, useRef, useEffect } from "react";
import MobileNavItem from "./MobileNavItem";
import styles from "../NavItems.module.css";
import MobileMenu from "./MobileMenu";
import PrimaryButton from "../../../UI/PrimaryButton"
import classNames from 'classnames';

const MobileNav = (props) => {
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null)
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

 

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

      <section className={classNames(props.className, styles["links-wrapper-mobile"], !menuIsOpen && styles.fadeout)}>
        <ul className={styles["items-list"]} ref={dropdownRef} >

        {props.navItems.map((item, index) => <MobileNavItem key={index} name={item.title} subItems={item.subItems} active={index===activeIndex} onClick={() => handleActive(index)}/>)}

        </ul>

        <a href="#" className={styles.login}>
          Login
        </a>
        <PrimaryButton text="Sign Up" mobileNav="true"/>
        </section>
    </React.Fragment>
  );
};

export default MobileNav;
