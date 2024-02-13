import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <>
            <h1>Error. Click below to go back home</h1>
            <h1>
                <Link to="/">Home</Link>
            </h1>
        </>
       
    );
}