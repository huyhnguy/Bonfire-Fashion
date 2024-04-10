import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import styles from "./Cart.module.css"

export default function Cart() {
    const [cartChange, setCartChange] = useState(false);
    let products = [];

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
                return (
                <div key={product.id} role="listitem">
                    <h1>{item.title}</h1>
                    <img src={item.image}></img>
                    <label>Quantity:</label>
                    <input type="number" defaultValue={product.quantity} onChange={handleChange}></input>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                )
            } 
        })

        return (
            <>
            <p className={styles.title}>HUYS</p>
            <Navbar />
            <div role="list">
                {products.length > 0 ? shoppingList : <p>Your cart is empty!</p>}
            </div>
        </>
        )
}