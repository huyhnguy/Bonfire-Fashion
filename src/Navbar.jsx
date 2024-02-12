function Tab({ tabname }) {
    return (
        <button>{tabname}</button>
    )
};

export default function Navbar() {
    return (
        <div>
            <Tab tabname= "Home"/>
            <Tab tabname= "Shop"/>
            <Tab tabname= "Shopping Cart"/>
        </div>
    )
}