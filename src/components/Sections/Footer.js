import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__container"]}>
        <img src={logo} className={styles.logo} alt="Blogr Logo" />
        <ul>
          <li className={styles["list__title"]}>Product</li>
          <li className={styles["list__item"]}>Overview</li>
          <li className={styles["list__item"]}>Pricing</li>
          <li className={styles["list__item"]}>Marketplace</li>
          <li className={styles["list__item"]}>Features</li>
          <li className={styles["list__item"]}>Integrations</li>
        </ul>
        <ul>
          <li className={styles["list__title"]}>Company</li>
          <li className={styles["list__item"]}>About</li>
          <li className={styles["list__item"]}>Team</li>
          <li className={styles["list__item"]}>Blog</li>
          <li className={styles["list__item"]}>Careers</li>
        </ul>
        <ul>
          <li className={styles["list__title"]}>Product</li>
          <li className={styles["list__item"]}>Contact</li>
          <li className={styles["list__item"]}>Newsletter</li>
          <li className={styles["list__item"]}>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
