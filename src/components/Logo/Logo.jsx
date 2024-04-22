import styles from "./Logo.module.css"
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to='/' className={styles.title}>HUY'S</Link>
    )
}