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
                            <h1>ADDED TO CART</h1>
                            <button onClick={closeFunction} className={styles.close}>&times;</button>
                        </div>
                        <div className={styles.body}>
                            <img src={item.image} className={styles.image}></img>
                            <div className={styles.bodytext}>
                                <p className={styles.title}>{item.title}</p>
                                <p className={styles.quantity}>Quantity: {data.quantity}</p>
                            </div>
                        </div>
                        <Link to='/cart' className={styles.link}>SEE SHOPPING CART</Link>
                    </div>
                    <div id={styles.overlay}></div>
                </>
                
            )
        }
}