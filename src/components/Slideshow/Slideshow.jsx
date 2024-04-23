import clothing from "../../images/clothing-on-ground.jpg"
import styles from "./Slideshow.module.css"
import right from "../../images/right.svg"
import left from "../../images/left.svg"

export default function Slideshow() {
    return(
        <div className={styles.slideshow}>
            <img src={clothing} className={styles.clothing}></img>
            <img src={right} className={styles.right}></img>
            <img src={left} className={styles.left}></img>
        </div>
    )
}