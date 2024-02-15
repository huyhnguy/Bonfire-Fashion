import Navbar from "./Navbar"
import Product from "./Product/Product"
import { useEffect, useState } from "react"

export default function Shop() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }, []);

    return (
        <>
            <Navbar />
            <h1>Hi! This is the shop page.</h1>
            { products &&
                products.map(product => <Product data={product} key={product.id} />)
            }
        </>
    )
}