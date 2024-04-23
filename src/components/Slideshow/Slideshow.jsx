import clothing from "../../images/clothing-on-ground.jpg"
import styles from "./Slideshow.module.css"
import right from "../../images/right.svg"
import left from "../../images/left.svg"
import { useState } from "react"
import one from "../../images/slideshow-1.jpg"
import two from "../../images/slideshow-2.jpg"
import three from "../../images/slideshow-3.jpg"

export default function Slideshow() {
    const [activePhoto, setActivePhoto] = useState(0);
    const imageArray = [clothing, one, two, three];

    function handleClick() {
        setActivePhoto(activePhoto + 1)
    }

    return(
        <div className={styles.slideshow}>
            {activePhoto > 0 ? 
            <>
                <img key={activePhoto - 1} src={imageArray[activePhoto - 1]} className={`${styles.photo} ${styles.fadeOut}`}></img>
                <img key={activePhoto} src={imageArray[activePhoto]} className={`${styles.photo} ${styles.newPhoto}`}></img>
            </> : 
                <img src={imageArray[0]} className={styles.photo}></img> }
            <img src={right} className={styles.right} onClick={handleClick}></img>
            <img src={left} className={styles.left}></img>
        </div>
    )
}