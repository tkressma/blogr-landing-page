import styles from "./Link.module.css";
import classNames from 'classnames';
import lightArrow from "../../../assets/icon-arrow-light.svg"

const Link = (props) => {
  return (
    <li key={props.key} className={classNames(styles.link, props.active && styles.active)} onClick={props.onClick} >
      {props.name}
      <img className={classNames(styles.animate, props.active && styles.rotate)} src={lightArrow} />
    </li>
  );
};

export default Link;
