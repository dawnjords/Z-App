import React from "react";
import styles from "./HowItWorksCard.module.css";

export default function HowItWorksCard() {
return (
    <div className={styles.card}>

        {/* left illustration */}
        <div className={styles.illustration}>
            {/* outer rings */}
            <div className={`${styles.ring} ${styles.ringOuter}`}/>
            <div className={`${styles.ring} ${styles.ringSecond}`}/>
            <div className={`${styles.ring} ${styles.ringThird}`}/>
            <div className={`${styles.ring} ${styles.ringFourth}`}/>

            {/* white circle with water drop */}
            <div className={styles.iconCircle}>
             <img
             src="/image/icons/zicons/teardrop.svg"
             alt="water drop"
             className={styles.teardrop} 
             />  
            </div>
        </div>

        {/* right side */}
        <div className={styles.text}>
            <h3 className={styles.title}>Buy fuel now, use it later</h3>
            <p className= {styles.body}>lock the pump price within 30km of your location and buy it to use later!</p>

        </div>
    </div>

);
}