import Navbar from "../Navbar/Navbar"
import styles from "./App.module.css"
import ground from "../../images/clothing-on-ground.jpg"
import Logo from "../Logo/Logo"
import coach from "../../images/woman-coach.jpg"
import frendsmans from "../../images/frendsmans.jpg"
import wendel from "../../images/wendel.jpg"
import { Link } from "react-router-dom"

export default function App() {
  return (
    <>
      <Logo />
      <Navbar activeTab='home'/>
      <div className={styles.groundContainer}>
        <img src={ground} className={styles.ground}></img>
        <p className={styles.credit}>Photo by Lum3n via <a href="https://www.pexels.com/photo/low-angle-view-of-shoes-322207/" className={styles.link}>Pexels</a></p>
      </div>
      <p className={styles.text}>ONE STOP SHOP</p>
      <div className={styles.womens}>
        <div className={styles.womanContainer}>
          <img src={coach} className={styles.woman}></img>
          <p className={styles.credit}>Photo by Godisable Jacob via <a href="https://www.pexels.com/photo/woman-sitting-on-sofa-bed-wearing-sunglasses-965324/" className={styles.link}>Pexels</a></p>
          <Link to="/womens" className={styles.womanLink}>SHOP WOMENS</Link>
        </div>
        <div className={styles.womanContainer}>
          <img src={frendsmans} className={styles.woman}></img>
          <p className={styles.credit}>Photo by Konstantin Mishchenko via <a href="https://www.pexels.com/photo/woman-standing-indoor-1926769/" className={styles.link}>Pexels</a></p>
        </div>
        <div className={styles.womanContainer}>
        <img src={wendel} className={styles.woman}></img>
        <p className={styles.credit}>Photo by wendel moretti via <a href="https://www.pexels.com/photo/woman-wearing-black-sport-1972115/" className={styles.link}>Pexels</a></p>
        </div>
      </div>
    </>
  )
}

