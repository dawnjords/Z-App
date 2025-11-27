import React, { useEffect, useState } from "react";
import styles from "./Overlay.module.css";

// Correct image imports
import checkIcon from "../../../assets/overlay/check.png";
import backIcon from "../../../assets/overlay/back.png";
import swoosh from "../../../assets/overlay/z-swoosh.png";

// Animation frames
import anim1 from "../../../assets/overlay/Property1_Default.png";
import anim2 from "../../../assets/overlay/Property1_Variant4(1).png";
import anim3 from "../../../assets/overlay/Property1_Variant4.png";
import anim4 from "../../../assets/overlay/Property1_Variant3.png";

const OrderConfirmOverlay = ({ onHome }) => {
  const frames = [anim1, anim2, anim3, anim4];
  const [frameIndex, setFrameIndex] = useState(0);

  // Animation loop
  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % frames.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.overlayWrapper}>
      <div className={styles.confirmCard}>
        {/* ===== HEADER BAR ===== */}
        <div className={styles.confirmHeader}>
          {/* 🔙 Back to payment page */}
          <img
            src={backIcon}
            alt="Back"
            className={styles.headerIcon}
            onClick={onHome}
            style={{ cursor: "pointer" }}
          />

          {/* Title */}
          <span className={styles.headerTitle}>Order Confirmed</span>

          {/* ✔ Success Checkmark */}
          <img
            src={checkIcon}
            alt="Success"
            className={styles.headerRightIcon}
          />
        </div>

        {/* ===== TEXT ===== */}
        <div className={styles.confirmBody}>
          <h3>Thank you for your order!</h3>
          <p>
            Your request has been successfully sent to our team at Z.
            <br />
            <br />
            We’ll notify you shortly once your order is ready for pick-up.
          </p>
        </div>

        {/* ===== ANIMATION BUBBLE ===== */}
        <img
          src={frames[frameIndex]}
          alt="Animation"
          className={styles.animationBubble}
        />
      </div>
    </div>
  );
};

export default OrderConfirmOverlay;
