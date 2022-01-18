import styles from "./MobileNavItem.module.css"
import classNames from "classnames"
import darkArrow from "../../../assets/icon-arrow-dark.svg"
const MobileNavItem = (props) => {
    return (
    <>
    <li className={classNames(styles["mobile-item"], props.active && styles.active)} onClick={props.onClick}>
    
    {props.name}

          <img src={darkArrow} className={classNames(styles.animate, props.active && styles.rotate)} alt="Arrow for dropdown menu."/>
    </li>

    {props.active && <section className={styles.submenu}>hello</section>}
    </>
    )

}

export default MobileNavItem