import styles from "./Signup.module.css"

export default function Signup() {
    const handleSignUp = (e) => {
        const email = document.getElementById("email");

        if (email.checkValidity()) {
            e.preventDefault();
            alert("You have successfully signed up for email updates!");
            email.value = "";
        }
    }
    
    return (
        <section aria-label="Email Updates Signup">
            <form className={styles.container}>
                <h3>Get Email Updates:</h3>
                <input type="email" className={styles.input} placeholder="Email Address" id="email" required></input>
                <button className={styles.button} onClick={(e) => {handleSignUp(e)}}>Sign Up</button>
            </form>
        </section>

    )
}