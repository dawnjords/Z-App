import React, { useState } from "react";
import styles from "./TopUpOverlay.module.css";
import { useNavigate } from "react-router-dom";

export default function TopUpOverlay() {
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.topupCard}>
        <div className={styles.header}>
          <h3>Top up</h3>
          <button className={styles.closeBtn} onClick={() => navigate(-1)}>
            ×
          </button>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>Recent saved card</p>
          <div className={styles.cardBox}>
            <span>1234-5678-1234-5678</span>
            <img
              src="/image/icons/visa.png"
              alt="Visa"
              className={styles.cardIcon}
            />
          </div>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>Amount to top up</p>
          <h2 className={styles.amount}>${amount}</h2>
          <input
            type="range"
            min="0"
            max="100"
            value={amount}
            className={styles.slider}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className={styles.topupBtn}>Top up now</button>
      </div>
    </div>
  );
}
