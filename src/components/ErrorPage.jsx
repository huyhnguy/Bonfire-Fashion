import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <main style={{"text-align": "center", "margin-top": "5rem"}}>
            <h1>Error</h1>
            <p>Click <a style={{color: "blue", "text-decoration": "underline"}}href="/">here</a> to go back home.</p>
        </main>
       
    );
}