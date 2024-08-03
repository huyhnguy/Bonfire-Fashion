import Navbar from "../Navbar/Navbar"
import styles from "./App.module.css"
import { useNavigate } from "react-router-dom"
import Countdown from "../Sale/Sale"
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import Footer from "../Footer"

export default function App() {
  

  return (
    <>
      <Countdown />
      <Navbar activeTab='home'/>
      <ImageCarousel />
      <Footer />
    </>
  )
}


