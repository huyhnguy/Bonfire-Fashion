import Navbar from "../Navbar/Navbar"
import styles from "./App.module.css"
import ground from "../../images/clothing-on-ground.jpg"
import Logo from "../Logo/Logo"

function App() {
  return (
    <>
      <Logo />
      <Navbar activeTab='home'/>
      <img src={ground} className={styles.ground}></img>
      <p className={styles.credit}>Photo by Lum3n via <a href="https://www.pexels.com/photo/low-angle-view-of-shoes-322207/" className={styles.link}>Pexels</a></p>
    </>
  )
}

export default App
