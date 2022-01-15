import styles from "./NavLinks.module.css";
import Link from "./Link";
const NavLinks = (props) => {
  const wrapperClass = props.isMobile
    ? "links-wrapper-mobile"
    : "links-wrapper";
  return (
    <ul className={`${props.className} ${styles[wrapperClass]}`}>
      <Link name="Product" />
      <Link name="Company" />
      <Link name="Connect" />
    </ul>
  );
};

export default NavLinks;
