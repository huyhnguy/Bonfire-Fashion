import styles from "./Sale.module.css"
import { useState, useEffect } from "react";

export default function Countdown() {
    const countDate = new Date('December 26, 2024 00:00:00').getTime();
    const [now, setNow] = useState(new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date().getTime()), 1000);
        return () => {
            clearInterval(interval);
        }
    }, [])

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    return (
        <section aria-label="Sitewide Sale Message" className={styles.container}>
            <p role="text" className={styles.sale}>10% OFF SITEWIDE! Use code '<span className={styles.emphasis}>HUYS</span>' before checkout. {textDay}:{textHour}:{textMinute}:{textSecond}</p>
        </section>
    )
}