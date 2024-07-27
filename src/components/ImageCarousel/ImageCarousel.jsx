import zero from "../../images/slideshow-0.jpg"
import one from "../../images/slideshow-1.jpg"
import two from "../../images/slideshow-2.jpg"
import three from "../../images/slideshow-3.jpg"
import four from "../../images/slideshow-4.jpg"
import { useState } from "react"
import right from "../../images/right.svg"
import left from "../../images/left.svg"
import styles from "./ImageCarousel.module.css"
import circle from "../../images/circle-regular.svg"
import solidCircle from "../../images/circle-solid.svg"


export default function ImageCarousel() {
    const imageArray = [
        {url: zero, alt: "Image Zero"},
        {url: one, alt: "Image One"},
        {url: two, alt: "Image Two"},
        {url: three, alt: "Image Three"},
        {url: four, alt: "Image Four"},
    ];

    const [imageIndex, setImageIndex] = useState(0);

    const showNextImage = () => {
        setImageIndex(index => {
            if (index === imageArray.length - 1) return 0;
            return index + 1
        })
    }

    const showPrevImage = () => {
        setImageIndex(index => {
            if (index === 0) return imageArray.length - 1;
            return index - 1
        })
    }

    return(
        <section aria-label="Image Carousel" className={styles.container}>
            <div className={styles.imageCarousel}>
                <div className={styles.allImages}>
                    {imageArray.map((image, index) => (
                        <img 
                            key={index} 
                            src={image.url} 
                            alt={image.alt} 
                            aria-hidden= {index !== imageIndex}
                            className={styles.imageCarouselImage} 
                            style={{ translate: `${-100 * imageIndex}%` }}
                        />
                    ))}
                </div>
                <button 
                    aria-label="View Previous Image" 
                    onClick={showPrevImage} 
                    className={`${styles.carouselButton} ${styles.leftButton}`}
                >
                    <img aria-hidden src={left} alt="" className={styles.leftImg}/>
                </button>
                <button 
                    aria-label="View Next Image" 
                    onClick={showNextImage} 
                    className={`${styles.carouselButton} ${styles.rightButton}`} 
                    id={styles.rightButton}
                >
                    <img aria-hidden src={right} alt="" className={styles.rightImg}/>
                </button>
                <div className={styles.circleButtonContainer}>
                    {imageArray.map((_, index) => (
                        <button 
                            className={styles.circleButton} 
                            key={index} 
                            aria-label={`View Image ${index}`}
                            onClick={() => setImageIndex(index)}
                        >
                            {index === imageIndex ? 
                                <img aria-hidden src={solidCircle} className={styles.circleImgActive}></img> 
                                : 
                                <img aria-hidden src={circle} className={styles.circleImg}></img>
                            }
                        </button>
                    ))}
                </div>
            </div>
        </section>

    )
}