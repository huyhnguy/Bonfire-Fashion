import styles from "./Popup.module.css"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PopUp({ data, closeFunction }) {
        const [item, setItem] = useState(null);
        const startUrl = 'https://fakestoreapi.com/products/'
        const finalUrl = startUrl.concat(data.id);

        useEffect(() => {
            fetch(finalUrl)
                .then(res=>res.json())
                .then(json=>setItem(json))
        }, []);

        if (item != null) {
            return (
                <>
                    <div className={`${styles.modal} ${styles.active}`}>
                        <div className={styles.header}>
                            <h1>Added to Cart</h1>
                            <button onClick={closeFunction} className={styles.close}>&times;</button>
                        </div>
                        <img src={item.image} className={styles.image}></img>
                        <p>{item.title}</p>
                        <p>Quantity: {data.quantity}</p>
                        <Link to='/cart'>See Shopping Cart</Link>
                    </div>
                    <div id={styles.overlay}></div>
                </>
                
            )
        }
}