import Accessibility from "../Accessibility"
import styles from "./Hero.module.css";
const Hero = () => {
    return (
        <section class={styles.hero}>
        <h1 class={styles["hero__title"]}>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>

        <Accessibility />
        </section>
    )
}
export default Hero;