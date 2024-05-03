import styles from "./Slideshow.module.css"
import right from "../../images/right.svg"
import left from "../../images/left.svg"
import { useState, useEffect } from "react"
import zero from "../../images/slideshow-0.jpg"
import one from "../../images/slideshow-1.jpg"
import two from "../../images/slideshow-2.jpg"
import three from "../../images/slideshow-3.jpg"
import four from "../../images/slideshow-4.jpg"

function Image({ photoNumber, position = undefined }) {
    const imageArray = [zero, one, two, three, four];

    return (
        <>
            {photoNumber === 0 &&
                <>
                    {position === 'new' && 
                        <div key={0} className={`${styles.newPhoto} ${styles.fadeIn}`}>
                            <img src={imageArray[0]} className={`${styles.photo} ${styles.image0}`}></img>
                            <p className={styles.credit}>Photo by Mnz via <a href="https://unsplash.com/photos/pair-of-white-low-top-sneakers-ToLMORRb97Q" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image0Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minima unde. Temporibus tenetur quibusdam quis.</p>
                            </div> 
                        </div>
                    }
                    {position === 'old' && 
                        <div key={0} className={styles.container}>
                            <img src={imageArray[0]} className={`${styles.photo} ${styles.fadeOut} ${styles.image0}`}></img>
                            <p className={styles.credit}>Photo by Mnz via <a href="https://unsplash.com/photos/pair-of-white-low-top-sneakers-ToLMORRb97Q" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image0Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minima unde. Temporibus tenetur quibusdam quis.</p>
                            </div>  
                        </div>
                    }           
                    {position === undefined && 
                        <div key={0} className={`${styles.container} ${styles.fadeIn}`}>
                            <img src={imageArray[0]} className={`${styles.photo} ${styles.image0}`}></img>
                            <p className={styles.credit}>Photo by Mnz via <a href="https://unsplash.com/photos/pair-of-white-low-top-sneakers-ToLMORRb97Q" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image0Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minima unde. Temporibus tenetur quibusdam quis.</p>
                            </div>  
                        </div>
                    }
                </>
            }
            {photoNumber === 1 &&
                <>
                    {position === 'new' && 
                        <div key={1} className={`${styles.newPhoto} ${styles.fadeIn}`}>
                            <img src={imageArray[1]} className={`${styles.photo} ${styles.image1}`}></img>
                            <p className={styles.credit}>Photo by Tamara Bellis via <a href="https://unsplash.com/photos/closeup-photo-of-womans-in-the-middle-of-road-8_LseWE80rA" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image1Text}>
                                <h1>Lorem ipsum dolor sit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis iusto consequuntur laborum voluptatibus illum consequatur quae ipsam obcaecati odit.</p>
                            </div> 
                        </div>
                    }
                    {position === 'old' && 
                        <div key={1} className={styles.container}>
                            <img src={imageArray[1]} className={`${styles.photo} ${styles.image1} ${styles.fadeOut}`}></img>
                            <p className={styles.credit}>Photo by Tamara Bellis via <a href="https://unsplash.com/photos/closeup-photo-of-womans-in-the-middle-of-road-8_LseWE80rA" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image1Text}>
                                <h1>Lorem ipsum dolor sit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore officiis iusto consequuntur laborum voluptatibus illum consequatur quae ipsam obcaecati odit.</p>
                            </div> 
                        </div>
                    }           
                </>
            }
            {photoNumber === 2 &&
                <>
                    {position === 'new' && 
                        <div key={2} className={`${styles.newPhoto} ${styles.fadeIn}`}>
                            <img src={imageArray[2]} className={styles.photo}></img>
                            <p className={styles.credit}>Photo by Larm Rmah via <a href="https://unsplash.com/photos/woman-on-wheat-field-during-daytime-R1Ku62Z7zqE" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image2Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla exercitationem qui iusto quam harum reiciendis quasi.</p>
                            </div> 
                        </div>
                    }
                    {position === 'old' && 
                        <div key={2} className={styles.container}>
                            <img src={imageArray[2]} className={`${styles.photo} ${styles.fadeOut}`}></img>
                            <p className={styles.credit}>Photo by Larm Rmah via <a href="https://unsplash.com/photos/woman-on-wheat-field-during-daytime-R1Ku62Z7zqE" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image2Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla exercitationem qui iusto quam harum reiciendis quasi.</p>
                            </div>  
                        </div>
                    }           
                </>
            }
            {photoNumber === 3 &&
                <>
                    {position === 'new' && 
                        <div key={3} className={`${styles.newPhoto} ${styles.fadeIn}`}>
                            <img src={imageArray[3]} className={styles.photo}></img>
                            <p className={styles.credit}>Photo by James Marty via <a href="https://unsplash.com/photos/man-wearing-denim-sport-shirt-and-sunglasses-on-concrete-flooring-h1BuNJZzpC8" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image3Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo saepe eaque voluptas aperiam possimus. Optio iusto pariatur non minima quos saepe veniam impedit amet?</p>
                            </div> 
                        </div>
                    }
                    {position === 'old' && 
                        <div key={3} className={styles.container}>
                            <img src={imageArray[3]} className={`${styles.photo} ${styles.fadeOut}`}></img>
                            <p className={styles.credit}>Photo by James Marty via <a href="https://unsplash.com/photos/man-wearing-denim-sport-shirt-and-sunglasses-on-concrete-flooring-h1BuNJZzpC8" className={styles.link}>Unsplash</a></p>
                            <div className={styles.image3Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, explicabo saepe eaque voluptas aperiam possimus. Optio iusto pariatur non minima quos saepe veniam impedit amet?</p>
                            </div>  
                        </div>
                    }           
                </>
            }
            {photoNumber === 4 &&
                <>
                    {position === 'new' && 
                        <div key={4} className={`${styles.newPhoto} ${styles.fadeIn}`}>
                            <img src={imageArray[4]} className={`${styles.photo} ${styles.image4}`}></img>
                            <p className={styles.credit}>Photo by josh Dago via <a href="https://www.pexels.com/photo/a-woman-wearing-a-necklace-with-two-gold-pendants-22392076/" className={styles.link}>Pexel</a></p>
                            <div className={styles.image4Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aperiam placeat commodi eius aliquid iure?</p>
                            </div> 
                        </div>
                    }
                    {position === 'old' && 
                        <div key={4} className={styles.container}>
                            <img src={imageArray[4]} className={`${styles.photo} ${styles.fadeOut} ${styles.image4}`}></img>
                            <p className={styles.credit}>Photo by josh Dago via <a href="https://www.pexels.com/photo/a-woman-wearing-a-necklace-with-two-gold-pendants-22392076/" className={styles.link}>Pexel</a></p>
                            <div className={styles.image4Text}>
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel aperiam placeat commodi eius aliquid iure?</p>
                            </div> 
                        </div>
                    }           
                </>
            }
        </>
    )
}

export default function Slideshow() {
    const [activePhoto, setActivePhoto] = useState(0);
    const [direction, setDirection] = useState(undefined);

    /*useEffect(() => {
        let timer = setTimeout(() => {
            handleRight();
        }, 5000);

        return () => clearTimeout(timer)
    }, [activePhoto]);*/

    function handleRight() {
        setDirection('forward');

        if (activePhoto === 4) {
            setActivePhoto(0);
        } else {
            setActivePhoto(activePhoto + 1)
        }
    }

    function handleLeft() {
        setDirection('backward');

        if (activePhoto === 0) {
            setActivePhoto(4)
        } else {
            setActivePhoto(activePhoto - 1)
        }
    }

    return(
        <div className={styles.slideshow}>
            {direction === undefined &&
                <Image photoNumber={activePhoto}/>
            }
            {activePhoto != 0 && direction === 'forward' && 
                <>
                    <Image photoNumber={activePhoto - 1} position='old' />
                    <Image photoNumber={activePhoto} position='new' />
                </> 
            } 
            {activePhoto === 0 && direction === 'forward' &&
                <>
                    <Image photoNumber={4} position='old' />
                    <Image photoNumber={activePhoto} position='new' />
                </> 
            }
            {activePhoto != 4 && direction === 'backward' &&
                <>
                    <Image photoNumber={activePhoto + 1} position='old' />
                    <Image photoNumber={activePhoto} position='new' />
                </> 
            }
            {activePhoto === 4 && direction === 'backward' &&
                <>
                    <Image photoNumber={0} position='old' />
                    <Image photoNumber={activePhoto} position='new' />
                </> 
            }
            <img src={right} className={styles.right} onClick={handleRight}></img>
            <img src={left} className={styles.left} onClick={handleLeft}></img>
        </div>
    )
}