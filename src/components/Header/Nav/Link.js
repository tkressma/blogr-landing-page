import styles from "./Link.module.css";
import lightArrow from "../../../assets/icon-arrow-light.svg"
const Link = (props) => {
  return (
    <li className={styles.link}>
      {props.name}
      <img src={lightArrow} />
    </li>
  );
};

export default Link;
