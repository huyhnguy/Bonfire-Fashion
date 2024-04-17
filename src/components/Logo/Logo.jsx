import styles from "./Logo.module.css"
import { Link } from "react-router-dom";

export default function Logo() {
    function handleClick() {

    }
    return (
        <Link to='/' className={styles.title}>HUYS</Link>
    )
}