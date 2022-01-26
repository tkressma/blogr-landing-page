import styles from "./Divider.module.css";
import phones from "../../assets/illustration-phones.svg";
import circles from "../../assets/bg-pattern-circles.svg";

const Divider = () => {
  return (
    <section className={styles.section}>
      <img src={phones} className={styles["section__img"]} />
      <article className={styles["section__article"]}>
        <h2 className={styles["section__h2"]}>
          State of the Art Infrastructure
        </h2>
        <p className={styles["section__p"]}>
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </article>
    </section>
  );
};

export default Divider;
