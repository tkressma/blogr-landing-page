import styles from "./Button.module.css";
const PrimaryButton = (props) => {
  return (
    <button className={`${styles.btn} ${styles[props.mobileNav === "true" ? "btn--mobilenav" : "btn--primary"]}`}>
      {props.text}
    </button>
  );
};

export default PrimaryButton;
