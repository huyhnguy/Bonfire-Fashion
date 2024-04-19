import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import styles from "./Cart.module.css"
import Logo from "../Logo/Logo";
import Countdown from "../Sale/Sale";

function Discount() {
    const [discount, setDiscount] = useState(false)

    function handleClick() {
        if (discount === false) {
            return setDiscount(true);
        } else {
            return setDiscount(false);
        }
    }

    return(
        <div className={styles.discountContainer}>
            <p onClick={handleClick} className={styles.discount}>Discount code?</p>
            {discount ? <p onClick={handleClick} className={styles.arrow}>&uarr;</p> : <p onClick={handleClick} className={styles.arrow}>&darr;</p>}
            {discount && 
                <div className={styles.inputContainer}>
                    <input></input>
                    <button>APPLY</button>
                </div>}
        </div>
    )
}

function Summary({ subtotal }) {
    let shippingHandling;
    if (localStorage.length > 0) {
        shippingHandling = 8;
    } else {
        shippingHandling = 0;
    }
    let tax = (subtotal + shippingHandling) * 0.0825;
    let total = subtotal + shippingHandling + tax;

    return(
        <>
            <div className={styles.summary}>
                <h1 className={styles.summaryTitle}>SUMMARY</h1>
                <Discount />
                <p>Subtotal:</p>
                <p className={styles.price}>${(Math.round(subtotal * 100) / 100).toFixed(2)}</p>
                <p>Shipping & Handling:</p>
                <p className={styles.price}>${shippingHandling.toFixed(2)}</p>
                <p>Tax:</p>
                <p className={styles.price}>${(Math.round(tax * 100) / 100).toFixed(2)}</p>
                <p>Total:</p>
                <h4 className={styles.price}>${(Math.round(total * 100) / 100).toFixed(2)}</h4>
                <button className={styles.checkout}>CHECKOUT</button>
            </div>
            
        </>
        
    )
}

export default function Cart() {
    const [cartChange, setCartChange] = useState(false);
    let products = [];
    let subtotal = 0;

    if (localStorage != undefined) {
        for (let i = 0; i < localStorage.length; i++) {
            const pair = localStorage[i];
            const id = pair.substring(0, pair.indexOf('-'));
            const quantity = pair.substring(pair.indexOf('-') + 1);
            const item = {
                id: id, 
                quantity: quantity,
            }
            products.push(item);
            
        }
    }

        const shoppingList = products.map((product) => {
            const [item, setItem] = useState(null);
            const [seed, setSeed] = useState(Math.random());
            const startUrl = 'https://fakestoreapi.com/products/'
            const finalUrl = startUrl.concat(product.id);
        
            useEffect(() => {
                fetch(finalUrl)
                    .then(res=>res.json())
                    .then(json=>setItem(json))
            }, []);

            function handleDelete() {
                for (let i = 0; i < localStorage.length; i++) {
                    const value = localStorage.getItem([i]);
                    if (value.startsWith(product.id) === true) {
                        for (let j = i ; j <= localStorage.length; j++) {
                            localStorage.setItem([j], localStorage[j+1])
                            if (j === localStorage.length - 1) {
                                localStorage.removeItem([j]);
                            }
                        }
                    }
                }
                window.location.reload();
                
            }

            function handleChange(e) {
                if (Number(e.target.value) === 0 && e.target.value != '') {
                    handleDelete();
                }

                for (let i = 0; i < localStorage.length; i++) {
                    const value = localStorage.getItem([i]);
                    if (value.startsWith(product.id) === true) {
                        const newValue = product.id + '-' + e.target.value;
                        localStorage.setItem([i], newValue);
                    }
                }

                return setSeed(Math.random());
            }

            if (item != null) {
                const itemTotal = item.price * product.quantity;
                subtotal += itemTotal;

                return (
                <div key={product.id} role="listitem" className={styles.item}>
                    <img src={item.image} className={styles.image}></img>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.itemPrice}>${(Math.round(itemTotal * 100) / 100).toFixed(2)}</p>
                    <div className={styles.quantitybox}>
                        <label>Quantity:</label>
                        <input type="number" defaultValue={product.quantity} onChange={handleChange} className={styles.input}></input>
                        <button onClick={handleDelete} className={styles.delete}>Delete</button>
                    </div>
                </div>
                )
            } 
        })

        return (
        <>
            <Logo />
            <Navbar activeTab="cart"/>
            <Countdown />
            <div className={styles.section}>
                <div role="list" className={styles.cart}>
                    {products.length > 0 ? shoppingList : <p>Your cart is empty!</p>}
                </div>
                <Summary subtotal={subtotal}/>
            </div>
        </>
        )
}