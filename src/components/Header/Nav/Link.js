import styles from "./Link.module.css";
import lightArrow from "../../../assets/icon-arrow-light.svg"
const Link = (props) => {
  return (
    <li className={styles.link}>
      <a href="#display">{props.name}</a>
      <img src={lightArrow} />
    </li>
  );
};

export default Link;
