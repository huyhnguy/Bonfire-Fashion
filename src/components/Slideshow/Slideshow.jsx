import clothing from "../../images/clothing-on-ground.jpg"
import styles from "./Slideshow.module.css"
import right from "../../images/right.svg"
import left from "../../images/left.svg"
import { useState } from "react"
import zero from "../../images/slideshow-0.jpg"
import one from "../../images/slideshow-1.jpg"
import two from "../../images/slideshow-2.jpg"
import three from "../../images/slideshow-3.jpg"
import four from "../../images/slideshow-4.jpg"

export default function Slideshow() {
    const [activePhoto, setActivePhoto] = useState(0);
    const imageArray = [zero, one, two, three, four];

    function handleClick() {
        if (activePhoto === 4) {
            setActivePhoto(0);
        } else {
            setActivePhoto(activePhoto + 1)
        }
    }

    return(
        <div className={styles.slideshow}>
            {activePhoto > 0 ? 
                <>
                    <img key={activePhoto - 1} src={imageArray[activePhoto - 1]} className={`${styles.photo} ${styles.fadeOut}`}></img>
                    <img key={activePhoto} src={imageArray[activePhoto]} className={`${styles.photo} ${styles.newPhoto}`}></img>
                </> : 
                <>
                    <img key={5} src={imageArray[4]} className={`${styles.photo} ${styles.fadeOut}`}></img>
                    <img key={activePhoto} src={imageArray[0]} className={`${styles.photo} ${styles.newPhoto}`}></img>
                </>
            }
            <img src={right} className={styles.right} onClick={handleClick}></img>
            <img src={left} className={styles.left}></img>
        </div>
    )
}