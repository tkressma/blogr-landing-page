import styles from "./MobileNavItem.module.css";
import classNames from "classnames";
import MobileNavSubMenu from "./MobileNavSubMenu";
import darkArrow from "../../../../assets/icon-arrow-dark.svg";
const MobileMenuItem = (props) => {
  return (
    <>
      <li
        className={classNames(
          styles["mobile-item"],
          props.active && styles.active
        )}
        onClick={props.onClick}
      >
        {props.name}
        <img
          src={darkArrow}
          className={classNames(styles.animate, props.active && styles.rotate)}
          alt="Arrow for dropdown menu."
        />
      </li>

      {props.active && <MobileNavSubMenu subItems={props.subItems} />}
    </>
  );
};

export default MobileMenuItem;
