import styles from "./MobileNavSubMenu.module.css"
const MobileNavSubMenu = (props) => {
    return (
    <section className={styles.submenu}>
    <ul className={styles["submenu__list"]}>
        {props.subItems.map(item => <li className={styles["submenu__item"]}>{item}</li>)}
    </ul>
    </section>
    )
}
export default MobileNavSubMenu