import Signup from "./Signup/Signup"
import Hyperlinks from "./Hyperlinks/Hyperlinks"
import Copyright from "./Copyright/Copyright"

export default function Footer() {
    return (
        <footer aria-label="Footer">
            <Signup />
            <Hyperlinks />
            <Copyright />
        </footer>
    )
}