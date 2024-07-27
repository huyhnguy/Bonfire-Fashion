import styles from "./Logo.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Logo() {
    let navigate = useNavigate(); 

    function handleClick() {
      let path = `/`; 
      navigate(path);
    }

    return (
        <h1 aria-label="Home" onClick={handleClick} className={styles.title}>HUY'S</h1>
    )
}