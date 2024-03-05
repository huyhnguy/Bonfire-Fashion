import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Cart() {
    let products = [];

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, []);

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
            console.log(typeof product.id)
        
            useEffect(() => {
                fetch(finalUrl)
                    .then(res=>res.json())
                    .then(json=>setItem(json))
            }, []);
        
            return (
                <div>
                    <h1>{item && item.title}</h1>
                    <p>Quantity: {product.quantity}</p>
                </div>
            )
        })
        console.log(shoppingList);

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