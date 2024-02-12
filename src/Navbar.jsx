import { Link } from "react-router-dom"

function Tab({ tabname, path }) {
    return (
        <div>
            <Link to={path}>{tabname}</Link>
        </div>
    )
};

export default function Navbar() {
    return (
        <div>
            <Tab tabname= "Home" path= "/"/>
            <Tab tabname= "Shop" path= "shop"/>
            <Tab tabname= "Shopping Cart" path= "cart"/>
        </div>
    )
}