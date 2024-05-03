import Navbar from "../Navbar/Navbar"
import styles from "./App.module.css"
import { useNavigate } from "react-router-dom"
import Countdown from "../Sale/Sale"
import Hyperlinks from "../Hyperlinks/Hyperlinks"
import Copyright from "../Copyright/Copyright"
import Slideshow from "../Slideshow/Slideshow"
import Signup from "../Signup/Signup"
import man0 from "../../images/man-0.jpg"
import man1 from "../../images/man-1.jpg"
import bracelet from "../../images/bracelet.jpg"
import mother1 from "../../images/mother-1.jpg"
import mother2 from "../../images/mother-2.jpg"

export default function App() {
  
  let navigate = useNavigate(); 

  function handleMens() {
    let path = `/mens`; 
    navigate(path);
  }

  function handleJewelry() {
    let path = '/jewelry';
    navigate(path);
  }

  function handleWomens() {
    let path = `/womens`; 
    navigate(path);
  }

  return (
    <>
      <Countdown />
      <Navbar activeTab='home'/>
      <Slideshow />
      <section className={styles.mens}>
        <div className={styles.mensPanel}>
          <div className={styles.manContainer}>
            <img src={man0} className={styles.man0}></img>
            <p className={styles.credit}>Photo by Karl Fredrickson via <a href="https://unsplash.com/photos/man-standing-facing-mountains-during-sunset-DsAjH9B24G8" className={styles.link}>Unsplash</a></p>
          </div>
          <div className={styles.manContainer}>
            <img src={man1} className={styles.man1}></img>
            <p className={styles.credit}>Photo by Brooke Cagle via <a href="https://unsplash.com/photos/man-standing-on-road-between-sand-7iTE5rhI6lc" className={styles.link}>Unsplash</a></p>
          </div>
        </div>
        <div className={styles.panelText}>
          <h1>Comfort and style</h1>
          <p>Casual pieces made for you to look and feel your best everywhere you go. </p>
          <button onClick={handleMens}>Shop Mens</button>
        </div>
      </section>
      <section className={styles.mothers}>
        <div className={styles.mothersText}>
          <h2 className={styles.celebrating}>CELEBRATE</h2>
          <h1 className={styles.mothersHeadline}>MOTHER'S DAY</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, sequi, voluptatem natus repellendus vitae ducimus excepturi ipsa culpa corrupti odio accusantium iste obcaecati numquam sit.</p>
          <button onClick={handleWomens}>Shop Womens</button>
        </div>
        <div className={styles.mother1Container}>
          <img src={mother1} className={styles.mother1}></img>
          <p className={styles.credit}>Photo by Jonathan Borba via <a href="https://unsplash.com/photos/woman-in-black-long-sleeve-shirt-sitting-on-white-couch-n1B6ftPB5Eg" className={styles.link}>Unsplash</a></p>
        </div>
        <div className={styles.mother2Container}>
          <img src={mother2} className={styles.mother2}></img>
          <p className={styles.credit}>Photo by Hello Revival via <a href="https://unsplash.com/photos/woman-carrying-child-beside-hedges-VPpTlTD0Ylk" className={styles.link}>Unsplash</a></p>
        </div>
      </section>
      <section className={styles.jewelry}>
          <div className={styles.jewelryContainer}>
            <img src={bracelet} className={styles.bracelet}></img>
            <p className={styles.credit}>Photo by Christian Lucas via <a href="https://unsplash.com/photos/silver-and-diamond-studded-bracelet-LrQys_Ukuak" className={styles.link}>Unsplash</a></p>
          </div>
          <div className={styles.panelText}>
            <h1>Timeless</h1>
            <p>High-quality jewelry made to stay elegant forever.</p>
            <button onClick={handleJewelry}>Shop Jewelry</button>
          </div>
      </section>
      <Signup />
      <Hyperlinks />
      <Copyright />
    </>
  )
}


