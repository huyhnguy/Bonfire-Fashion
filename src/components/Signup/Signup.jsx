import styles from "./Signup.module.css"

export default function Signup() {
    return (
        <section className={styles.container}>
            <h3>Get Email Updates:</h3>
            <input className={styles.input} placeholder="Email Address"></input>
            <button className={styles.button}>Sign Up</button>
        </section>
    )
}