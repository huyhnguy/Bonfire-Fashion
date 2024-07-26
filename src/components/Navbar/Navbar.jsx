import { Link, useNavigate } from "react-router-dom"
import styles from "./Navbar.module.css"
import Logo from "../Logo/Logo"
import cart from "../../images/cart.svg"
import useWindowSize from "../UseWindowSize/UseWindowSize"
import hamburgerIcon from "../../images/bars-solid.svg"
import { useState } from "react"
import rectangleX from "../../images/rectangle-x.svg"


function Tab({ tabname, path, active }) {
    return (
        <div>
            {active != undefined ? <Link to={path} className={`${styles.tab} ${styles.active}`}>{tabname}</Link> :
                <Link className={styles.tab} to={path}>{tabname}</Link>}
        </div>
    )
};

function CartTab() {
    let totalQuantity = 0;
    
    for (let i = 0; i < localStorage.length; i++) {
        const itemQuantity = Number(localStorage[i].substring(localStorage[i].indexOf('-') + 1));
        totalQuantity = totalQuantity + itemQuantity;
    }

    let navigate = useNavigate();
    function handleClick() {
        let path = "/cart";
        navigate(path);
    }

    return (
        <div className={styles.cartContainer}>
            <img src={cart} className={styles.cart} onClick={handleClick}></img> 
            {totalQuantity > 0 && <div className={styles.dot}>{totalQuantity}</div>}
        </div>  
    )
}

function HamMenu() {
    return (
        <nav>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    )
}

export default function Navbar({ activeTab }) {
    const [hamburger, setHamburger] = useState(false);

    const size = useWindowSize();

    const handleHamburger = () => {
        if (hamburger) {
            document.body.classList.remove("fixed-position");
            setHamburger(false);
        } else {
            document.body.classList.add("fixed-position");
            setHamburger(true);
        }
    }

    return (
        <>
            {size.width > 600 ?         
                <nav role="navigation" className={styles.navigation}>
                    <Logo />
                    <div className={styles.categories}>
                        { activeTab === 'mens' ? <Tab tabname= "MENS" path= "/mens" role="link" active="active"/> : <Tab tabname= "MENS" path= "/mens" role="link" /> }
                        { activeTab === 'womens' ? <Tab tabname= "WOMENS" path= "/womens" role= "link" active="active" /> :<Tab tabname= "WOMENS" path= "/womens" role= "link" /> }
                        { activeTab === 'jewelry' ? <Tab tabname= "JEWELRY" path= "/jewelry" role="link" active="active" /> :<Tab tabname= "JEWELRY" path= "/jewelry" role="link" /> }
                        { activeTab === 'electronics' ? <Tab tabname= "ELECTRONICS" path= "/electronics" role="link" active="active" /> :<Tab tabname= "ELECTRONICS" path= "/electronics" role="link" /> }
                    </div>
                    <CartTab role="link"/>
                </nav> 
            : 
            <nav className={styles.hamburgerNav}>
                <Logo />
                <img className={styles.hamburger} src={hamburgerIcon} onClick={handleHamburger}></img>  
            </nav>
            }
            { hamburger && 
                    <>
                        <div className={styles.hamburgerMenu}>
                            <img className={styles.exitHamburger} src={rectangleX} alt="" onClick={handleHamburger} />
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="mens">Mens</a></li>
                                <li><a href="womens">Womens</a></li>
                                <li><a href="jewelry">Jewelry</a></li>
                                <li><a href="electronics">Electronics</a></li>
                                <li><a href="cart">Shopping Cart</a></li>
                            </ul>
                        </div>
                        <div className={styles.shadow}></div>
                    </>

            }
        </>


    )
}