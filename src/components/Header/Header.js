import Nav from "./Nav/Nav";
import Hero from "./Hero";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <Hero />
    </header>
  );
};

export default Header;
