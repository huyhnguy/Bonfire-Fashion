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

            function handleDelete() {
                for (let i = 0; i < localStorage.length; i++) {
                    const value = localStorage.getItem([i]);
                    console.log(value);
                    if (value.startsWith(product.id) === true) {
                        for (let j = i + 1; j < localStorage.length; j++) {
                            localStorage.setItem([j-1], localStorage[j])
                            if (j === localStorage.length - 1) {
                                localStorage.removeItem(j);
                            }
                        }
                    }
                }
            }

            if (item != null) {
                return (
                <div key={product.id}>
                    <h1>{item.title}</h1>
                    <img src={item.image}></img>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={handleDelete}>Delete</button>
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