import styles from "./Link.module.css";
import lightArrow from "../../../assets/icon-arrow-light.svg"
const Link = (props) => {

  return (
    <li key={props.key} className={`${styles.link} ${props.active ? styles.active : null}`} onClick={props.onClick} >
      {props.name}
      <img class={styles["nav__arrow"]} src={lightArrow} />
    </li>
  );
};

export default Link;
