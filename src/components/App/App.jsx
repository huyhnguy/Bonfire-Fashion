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
import ImageCarousel from "../ImageCarousel/ImageCarousel"
import Footer from "../Footer"

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
      <ImageCarousel />
      <Footer />
    </>
  )
}


