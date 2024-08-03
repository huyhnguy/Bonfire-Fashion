import styles from "./Logo.module.css"
import useWindowSize from "../UseWindowSize/UseWindowSize"
import { useNavigate } from "react-router-dom";
import logo from "../../images/fire-solid.svg"

export default function Logo() {
    let navigate = useNavigate(); 

    function handleClick() {
      let path = `/`; 
      navigate(path);
    }

    const size = useWindowSize();

    return (
      <>
        { size.width > 850 ?         
          <h1 aria-label="Home" onClick={handleClick} id={styles.title}>B<img src={logo} alt="logo" style={{ height: "2.5rem" }}/>NFIRE</h1>
          :
          <img src={logo} alt="logo" id={styles.logo} style={{ height: "2.5rem", marginBlock: "1rem" }} onClick={handleClick}/>
        }
      </>

    )
}