import { Link } from "react-router-dom"
import { useState } from "react";

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
        <div role="navigation">
            <Tab tabname= "Home" path= "/" role="link"/>
            <Tab tabname= "Shop" path= "/shop" role="link" />
            <CartTab tabname= "Shopping Cart" path= "/cart" role="link"/>
        </div>
    )
}