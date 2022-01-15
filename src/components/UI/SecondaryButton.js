import styles from "./Button.module.css";
const SecondaryButton = (props) => {
  return (
    <button className={`${styles.btn} ${styles["btn--secondary"]}`}>
      {props.text}
    </button>
  );
};

export default SecondaryButton;
