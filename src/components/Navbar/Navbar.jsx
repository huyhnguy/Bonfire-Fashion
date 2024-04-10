import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Tab({ tabname, path }) {
    return (
        <div>
            <Link to={path}>{tabname}</Link>
        </div>
    )
};

function CartTab({ tabname, path }) {
    let totalQuantity = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const itemQuantity = Number(localStorage[i].substring(localStorage[i].indexOf('-') + 1));
        totalQuantity = totalQuantity + itemQuantity;
    }

    return (
        <div>
            <Link to={path}>{tabname} ({totalQuantity})</Link>
        </div>
    )
}

export default function Navbar() {

    return (
        <div role="navigation" className={styles.navigation}>
            <Tab tabname= "HOME" path= "/" role="link"/>
            <Tab tabname= "SHOP" path= "/shop" role="link" />
            <CartTab tabname= "SHOPPING CART" path= "/cart" role="link"/>
        </div>
    )
}