import decrease from "../../images/decrease.svg";
import increase from "../../images/increase.svg";
import styles from "./Product.module.css"
import { useState } from "react";

export default function Product({ data }) {
    const [quantity, setQuantity] = useState(0);
    
    function handleIncrease() {
        setQuantity(quantity + 1);
    }

    function handleDecrease() {
        setQuantity(quantity - 1);
    }

    return (
        <div className={styles.container}>
            <img src={data.image} className={styles.image}></img>
            <h1 className={styles.title}>{data.title}</h1>
            <img src={decrease} className={styles.quantity} onClick={handleDecrease}></img>
            <input type="number" className={styles.number} min={0} max={10} value={quantity}></input>
            <img src={increase} className={styles.quantity} onClick={handleIncrease}></img>
            <button>Add to cart</button>
        </div>
    )
}