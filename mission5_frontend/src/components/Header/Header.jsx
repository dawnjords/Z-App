import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import zLogo from "/image/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/* Logo links to home */}
        <Link to="/">
          <img src={zLogo} alt="Z Energy logo" className={styles.logo} />
        </Link>

        <button className={styles.personalBtn}>For personal</button>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>Z App</li>
          <li>About Z</li>

          <li>
            <Link to="/login">
              <button>
                <img src="/image/icons/shoppingCart.png" alt="shoppingIcon" />
              </button>
            </Link>
          </li>

          <li>
            <button>
              <img src="/image/icons/searchIcon.png" alt="searchIcon" />
            </button>
          </li>

          <li>
            {/* FIXED login button with working link */}
            <Link to="/login">
              <button className={styles.loginBtn}>
                <img
                  src="/image/icons/more/login button.png"
                  alt="Login button"
                />
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
