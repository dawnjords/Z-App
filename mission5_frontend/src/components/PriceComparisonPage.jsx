import React, { useState } from "react";
import styles from "./PriceComparisonPage.module.css";

import bannerTop from "../assets/banner/2.png";
import bannerHero from "../assets/banner/3.png";
import zLogo from "../assets/banner/4.png";

const PriceComparisonPage = () => {
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [results1, setResults1] = useState([]);
  const [results2, setResults2] = useState([]);

  // --- Mock Station Data ---
  const stations = [
    {
      name: "Z Albany",
      area: "north shore",
      prices: { "Z 91": 3.0, "Z X95": 3.2, "Z D": 2.3 },
    },
    {
      name: "Z Henderson",
      area: "west auckland",
      prices: { "Z 91": 2.6, "Z X95": 2.8, "Z D": 2.0 },
    },
    {
      name: "Z Sylvia Park",
      area: "east auckland",
      prices: { "Z 91": 3.1, "Z X95": 3.3, "Z D": 2.2 },
    },
    {
      name: "Z Manukau",
      area: "south auckland",
      prices: { "Z 91": 2.9, "Z X95": 3.1, "Z D": 2.1 },
    },
    {
      name: "Z Browns Bay",
      area: "milford",
      prices: { "Z 91": 3.05, "Z X95": 3.25, "Z D": 2.4 },
    },
  ];

  // --- Search Function ---
  const findStations = (input) => {
    const searchTerm = input.trim().toLowerCase();
    if (!searchTerm) return [];
    return stations.filter(
      (station) =>
        station.name.toLowerCase().includes(searchTerm) ||
        station.area.toLowerCase().includes(searchTerm)
    );
  };

  // --- Handlers ---
  const handleSearch1 = () => {
    setResults1(findStations(address1));
  };

  const handleSearch2 = () => {
    setResults2(findStations(address2));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top banner */}
      <section className={styles.topBanner}>
        <img src={bannerTop} alt="Fuel Your Savings" />
      </section>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <img
          src={bannerHero}
          alt="Compare Prices Across Stations"
          className={styles.heroImage}
        />
      </section>

      {/* White Section */}
      <section className={styles.whiteSection}>
        <h2 className={styles.sectionTitle}>Compare Prices Across Stations</h2>

        {/* First Search */}
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Enter address"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <button onClick={handleSearch1}>Search</button>
        </div>

        {/* Results for Search 1 */}
        <div className={styles.cardGrid}>
          {results1.map((station, idx) => (
            <div key={`${station.name}-${idx}`} className={styles.stationBlock}>
              <h3 className={styles.stationName}>{station.name}</h3>
              <div className={styles.stationGroup}>
                {Object.entries(station.prices).map(([fuelType, price]) => (
                  <div key={fuelType} className={styles.fuelCard}>
                    <div className={styles.cardHeader}>
                      <img src={zLogo} alt="Z logo" />
                      <span>{fuelType}</span>
                    </div>
                    <p className={styles.price}>
                      ${price.toFixed(2)} per liter
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Second Search */}
        <div className={styles.searchGroup}>
          <input
            type="text"
            placeholder="Enter second address"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <button onClick={handleSearch2}>Search</button>
        </div>

        {/* Results for Search 2 */}
        <div className={styles.cardGrid}>
          {results2.map((station, idx) => (
            <div key={`${station.name}-${idx}`} className={styles.stationBlock}>
              <h3 className={styles.stationName}>{station.name}</h3>
              <div className={styles.stationGroup}>
                {Object.entries(station.prices).map(([fuelType, price]) => (
                  <div key={fuelType} className={styles.fuelCard}>
                    <div className={styles.cardHeader}>
                      <img src={zLogo} alt="Z logo" />
                      <span>{fuelType}</span>
                    </div>
                    <p className={styles.price}>
                      ${price.toFixed(2)} per liter
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PriceComparisonPage;
