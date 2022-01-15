import styles from "./Accessibility.module.css";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
const Accessibility = (props) => {
  return (
    <section class={`${props.className} ${styles.accessibility}`}>
      {props.nav === "true" ? (
        <a href="#" class={styles.login}>
          Login
        </a>
      ) : (
        <SecondaryButton text="Learn More" />
      )}

      <PrimaryButton text="Sign Up" />
    </section>
  );
};

export default Accessibility;
