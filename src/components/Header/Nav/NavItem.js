import styles from "./NavItem.module.css";
import classNames from 'classnames';
import lightArrow from "../../../assets/icon-arrow-light.svg"

const NavItem = (props) => {
  return (
    <li key={props.key} className={classNames(styles.link, props.active && styles.active)} onClick={props.onClick} >
      {props.name}
      <img className={classNames(styles.animate, props.active && styles.rotate)} src={lightArrow} alt="Arrow for dropdown menu."/>
    </li>
  );
};

export default NavItem;