import React, { useState, useEffect } from "react";
import styles from "./AddCardDetails.module.css";
import { useNavigate } from "react-router-dom";

export default function AddCardDetails() {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  if (loading)
    return (
      <div className={styles.centerScreen}>
        <h3>Add Payment method</h3>
        <p>Loading... Please wait while the page loads</p>
      </div>
    );

  if (success)
    return (
      <div className={styles.centerScreen}>
        <div className={styles.successCircle}>
          <div className={styles.checkMark}>✓</div>
        </div>
        <h3>Payment method added successfully</h3>
        <p>Thank you for choosing Z App.</p>
        <button
          className={styles.primaryBtn}
          onClick={() => navigate("/mobile/home")}
        >
          Go back to home
        </button>
      </div>
    );

  return (
    <div className={styles.cardContainer}>
      <h3>Add Payment method</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>Card number</label>
        <input
          type="text"
          placeholder="Please enter your card number"
          required
        />

        <label>Expiry date</label>
        <input type="text" placeholder="MM/YY" required />

        <label>CVV number</label>
        <input
          type="text"
          placeholder="Please enter your CVV number"
          required
        />

        <label>Name on card</label>
        <input
          type="text"
          placeholder="Please enter your name on card"
          required
        />

        <button className={styles.primaryBtn}>Click to Pay</button>
      </form>
    </div>
  );
}
