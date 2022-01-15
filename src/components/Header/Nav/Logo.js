import logo from "../../../assets/logo.svg";
import styles from "./Logo.module.css";
const Logo = (props) => {
  return (
    <a href="https://www.frontendmentor.io" className={props.className}>
      <img src={logo} className={styles.logo} alt="Blogr Logo" />
    </a>
  );
};

export default Logo;
