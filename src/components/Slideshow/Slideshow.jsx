import clothing from "../../images/clothing-on-ground.jpg"
import styles from "./Slideshow.module.css"
import right from "../../images/right.svg"
import left from "../../images/left.svg"
import { useState } from "react"
import one from "../../images/slideshow-1.jpg"

export default function Slideshow() {
    const [activePhoto, setActivePhoto] = useState(0);

    const imageArray = [clothing, one];

    function handleClick() {
        setActivePhoto(activePhoto + 1)
    }

    return(
        <div className={styles.slideshow}>
            {activePhoto > 0 ? 
            <>
                <img src={imageArray[activePhoto - 1]} className={`${styles.clothing} ${styles.fadeOut}`}></img>
                <img src={imageArray[activePhoto]} className={`${styles.clothing} ${styles.second}`}></img>
            </> : 
                <img src={imageArray[0]} className={styles.clothing}></img> }
            <img src={right} className={styles.right} onClick={handleClick}></img>
            <img src={left} className={styles.left}></img>
        </div>
    )
}