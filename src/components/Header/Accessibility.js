import styles from "./Accessibility.module.css";
import PrimaryButton from "../UI/PrimaryButton";
import SecondaryButton from "../UI/SecondaryButton";
import React from "react";

const Accessibility = (props) => {
  return (
    <section className={`${props.className} ${styles.accessibility}`}>
      {props.nav === "true" ? (
        <React.Fragment>
          <a href="#" className={styles.login}>
            Login
          </a>
          <PrimaryButton text="Sign Up" />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <PrimaryButton text="Start for free" />
          <SecondaryButton text="Learn More" />
        </React.Fragment>
      )}
    </section>
  );
};

export default Accessibility;
