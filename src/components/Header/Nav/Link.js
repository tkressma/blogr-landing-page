import styles from "./Link.module.css";
const Link = (props) => {
  return (
    <li className={styles.link}>
      <a href="#display">{props.name}</a>
    </li>
  );
};

export default Link;
