import Accessibility from "./Accessibility";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles["hero__title"]}>A modern publishing platform</h1>
      <p className={styles["hero__tagline"]}>
        Grow your audience and build your online brand
      </p>
      <Accessibility className={styles["hero__accessibility"]} nav="false" />
    </section>
  );
};
export default Hero;
