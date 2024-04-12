import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

function Tab({ tabname, path, active }) {
    if (active != undefined) {
        return (
            <div>
                <Link to={path} className={styles.active}>{tabname}</Link>
            </div>
        )
    } else {
        return (
            <div>
                <Link to={path}>{tabname}</Link>
            </div>
        )
    }
};

function CartTab({ tabname, path, active }) {
    let totalQuantity = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const itemQuantity = Number(localStorage[i].substring(localStorage[i].indexOf('-') + 1));
        totalQuantity = totalQuantity + itemQuantity;
    }

    if (active != undefined) {
        return (
            <div>
                <Link to={path} className={styles.active}>{tabname} ({totalQuantity})</Link>
            </div>
        )
    } else {
        return (
            <div>
                <Link to={path}>{tabname} ({totalQuantity})</Link>
            </div>
        )
    }
}

export default function Navbar({ activeTab }) {
    if (activeTab === "home") {
        return (
            <div role="navigation" className={styles.navigation}>
                <Tab tabname= "HOME" path= "/" role="link" active="active" />
                <Tab tabname= "SHOP" path= "/shop" role="link" />
                <CartTab tabname= "SHOPPING CART" path= "/cart" role="link"/>
            </div>
        )
    } else if (activeTab === 'shop') {
        return (
            <div role="navigation" className={styles.navigation}>
                <Tab tabname= "HOME" path= "/" role="link"/>
                <Tab tabname= "SHOP" path= "/shop" role="link" active="active" />
                <CartTab tabname= "SHOPPING CART" path= "/cart" role="link"/>
            </div>
        )
    } else if (activeTab === 'cart') {
        return (
            <div role="navigation" className={styles.navigation}>
                <Tab tabname= "HOME" path= "/" role="link"/>
                <Tab tabname= "SHOP" path= "/shop" role="link" />
                <CartTab tabname= "SHOPPING CART" path= "/cart" role="link" active="active"/>
            </div>
        )
    }
}