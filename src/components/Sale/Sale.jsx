import styles from "./Sale.module.css"
import { useState, useEffect } from "react";

export default function Countdown() {
    const countDate = new Date('May 19, 2024 00:00:00').getTime();
    //const now = new Date().getTime();
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
        <div className={styles.countdown}>
            <div className={styles.dayContainer}>
                <h3 className={styles.day}>{textDay}</h3>
                <h3>Day</h3>
            </div>
            <div className={styles.hourContainer}>
                <h3 className={styles.hour}>{textHour}</h3>
                <h3>Hour</h3>
            </div>
            <div className={styles.minuteContainer}>
                <h3 className={styles.minute}>{textMinute}</h3>
                <h3>Minute</h3>
            </div>
            <div className={styles.secondContainer}>
                <h3 className={styles.second}>{textSecond}</h3>
                <h3>Second</h3>
            </div>
        </div>
    )
}