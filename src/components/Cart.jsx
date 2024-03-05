import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Cart() {
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
            const startUrl = 'https://fakestoreapi.com/products/'
            const finalUrl = startUrl.concat(product.id);
        
            useEffect(() => {
                fetch(finalUrl)
                    .then(res=>res.json())
                    .then(json=>setItem(json))
            }, []);

            if (item != null) {
                return (
                <div key={product.id}>
                    <h1>{item.title}</h1>
                    <img src={item.image}></img>
                    <p>Quantity: {product.quantity}</p>
                </div>
                )
            }
        
            return null;
        })

        return (
            <>
            <Navbar />
            <h1>Hi! This is your shopping cart.</h1>
            <div>
                {shoppingList}
            </div>
        </>
        )
}