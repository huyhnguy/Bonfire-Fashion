import Navbar from "../Navbar/Navbar"
import styles from "./App.module.css"

function App() {
  return (
    <>
      <p className={styles.title}>HUYS</p>
      <Navbar activeTab='home' />
      <h1 className={styles.about}>Welcome to the greatest online store known to mankind. Decades, centuries from now people will remember Huys. It will be written in history books because of how much better the quality of the products are in comparison to anything else out there. Browse our store in awe and remember it because you are a part of history in the making; the history of Huys.</h1>
    </>
  )
}

export default App
