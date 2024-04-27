import styles from "./Hyperlinks.module.css"

export default function Hyperlinks() {
    return (
        <section className={styles.hyperlinks}>
            <div>
                <h2>About Us</h2>
                <p className={styles.hyperlink}>Our Story</p>
                <p className={styles.hyperlink}>Careers</p>
                <p className={styles.hyperlink}>Diversity, Equity, and Inclusion</p>
                <p className={styles.hyperlink}>Get Email Updates</p>
                <p className={styles.hyperlink}>Our Blog</p>
                <p className={styles.hyperlink}>Our Podcast</p>
            </div>
            <div>
                <h2>Customer Service</h2>
                <p className={styles.hyperlink}>FAQ</p>
                <p className={styles.hyperlink}>Contact Us</p>
                <p className={styles.hyperlink}>Returns & Exchanges</p>
                <p className={styles.hyperlink}>Shipping & Delivery</p>
                <p className={styles.hyperlink}>Special Orders</p>
                <p className={styles.hyperlink}>Military Discount</p>
            </div>
            <div>
                <h2>Stores & Services</h2>
                <p className={styles.hyperlink}>Find a Store</p>
                <p className={styles.hyperlink}>Alterations & Tailoring</p>
                <p className={styles.hyperlink}>Store Services</p>
                <p className={styles.hyperlink}>Store Directory</p>
                <p className={styles.hyperlink}>Best Sellers</p>
                <p className={styles.hyperlink}>Repairs</p>
            </div>
        </section>
    )
}