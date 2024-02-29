import Navbar from "../Navbar"
import Product from "../Product/Product"
import { useEffect, useState } from "react"
import styles from "./Shop.module.css"

export default function Shop() {
    const [products, setProducts] = useState(null);
    const [shoppingCart, setShoppingCart] = useState({});
    const [productNumber, setProductNumber] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }, []);

    function handleClick(id, quantity) {

        setShoppingCart(prevShoppingCart => ({
            ...prevShoppingCart, 
            [productNumber]: {
                id: id,
                quantity: quantity
            }
        }))
        setProductNumber(productNumber + 1);
        console.log(shoppingCart);
    }

    return (
        <>
            <Navbar />
            <h1 className={styles.title}>Hi! This is the shop page.</h1>
            <div className={styles.shop}>
                { products &&
                    products.map(product => <Product data={product} key={product.id} handleClick={handleClick}/>)
                }
            </div>
            
        </>
    )
}