import { Link } from "react-router-dom"

function Tab({ tabname, path, data }) {
    return (
        <div>
            <Link 
                to={path}
                state= {data}
            >{tabname}</Link>
        </div>
    )
};

export default function Navbar(data) {
    return (
        <div>
            <Tab tabname= "Home" path= "/"/>
            <Tab tabname= "Shop" path= "/shop"/>
            <Tab tabname= "Shopping Cart" path= "/cart" data={data}/>
        </div>
    )
}