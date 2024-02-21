import decrease from "../../images/decrease.svg";
import increase from "../../images/increase.svg";
import styles from "./Product.module.css"
import { useState } from "react";
import PropTypes from 'prop-types';

export default function Product({ data }) {
    const [quantity, setQuantity] = useState(0);
    
    function handleIncrease(e) {
        console.log(e.target.previousSibling.value);
        console.log(typeof e.target.previousSibling.value);
        const currentQuantity = Number(e.target.previousSibling.value);

        if (currentQuantity < 10) {setQuantity(currentQuantity + 1)}
        
    }

    function handleDecrease(e) {
        console.log(e.target.nextSibling.value)
        const currentQuantity = Number(e.target.nextSibling.value);
        if (currentQuantity > 0) {setQuantity(currentQuantity - 1)}
    }

    function handleChange(e) {
        setQuantity(e.target.value);
    }

    return (
        <div className={styles.container}>
            <img src={data.image} className={styles.image}></img>
            <h1 className={styles.title}>{data.title}</h1>
            <div className={styles.interactContainer}>
                <div className={styles.quantityContainer}>
                    <img src={decrease} className={styles.quantity} onClick={handleDecrease}></img>
                    <input type="number" className={styles.number} value={quantity} onChange={handleChange}></input>
                    <img src={increase} className={styles.quantity} onClick={handleIncrease}></img>
                </div>
                <button>Add to cart</button>
            </div>
        </div>
    )
}