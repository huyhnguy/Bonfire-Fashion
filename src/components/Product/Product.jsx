import decrease from "../../images/decrease.svg";
import increase from "../../images/increase.svg";
import styles from "./Product.module.css"

export default function Product({ data }) {
    return (
        <div>
            <img src={data.image}></img>
            <h1>{data.title}</h1>
            <img src={decrease} className={styles.quantity}></img>
            <input type="number"></input>
            <img src={increase} className={styles.quantity}></img>
            <button>Add to cart</button>
        </div>
    )
}