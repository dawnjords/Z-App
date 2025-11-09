import React from "react";
import styles from "./FindFuelStation.module.css";

const ICONS = {
  car: "/image/icons/zicons/car.png",
  toilet: "/image/icons/zicons/toilet.png",
  gas: "/image/icons/zicons/Gas.png",
  EV2: "/image/icons/zicons/EV2.png",
  carwash: "/image/icons/zicons/carWash.png",
  coffeecup: "/image/icons/zicons/coffee.png",
  atm: "/image/icons/zicons/atm.png",
  phone: "/image/icons/zicons/phone.png",
  search: "/image/icons/zicons/search.png",

};

const STATIONS = [
  {
    id: 1,
    name: "Z Kingsway Station",
    address: "26 Clevedon Road, Papakura",
    phone: "09 2988185",
    hours: { Sun:"24 Hours", Mon:"24 Hours", Tue:"24 Hours", Wed:"24 Hours", Thu:"24 Hours", Fri:"24 Hours", Sat:"24 Hours" },
    features: ["toilet", "gas", "coffeecup", "atm"],
  },
  {
    id: 2,
    name: "Z Papakura North",
    address: "26 Clevedon Road, Papakura",
    phone: "09 2988185",
    hours: { Sun:"24 Hours", Mon:"24 Hours", Tue:"24 Hours", Wed:"24 Hours", Thu:"24 Hours", Fri:"24 Hours", Sat:"24 Hours" },
    features: ["toilet", "gas", "coffeecup", "atm"],
  },
];


function SearchBar() {
  return (
    <div className={styles.searchBar}>
     
      <input placeholder="Enter Your Location" />
    </div>
  );
}

function FeatureIcons({ features }) {
  return (
    <div className={styles.features}>
      {features.map((key) => (
        <img key={key} src={ICONS[key]} alt={key} className={styles.featureIcon} />
      ))}
    </div>
  );
}

function StationCard({ s }) {
  return (
    <article className={styles.card}>
      <header className={styles.cardHead}>
        <div className={styles.cardGrid}>
          <div className={styles.leftCol}>
            <h3 className={styles.cardTitle}>{s.name}</h3>
            <div className={styles.cardAddr}>{s.address}</div>
          </div>
        </div>
      </header>

      {/* icons on cards */}
        <FeatureIcons features={s.features} />

      {/* compact hours block – sits top-right */}
      <div className={styles.hoursWrap}>
        {Object.entries(s.hours).map(([day, h]) => (
          <div key={day} className={styles.hourRow}>
            <span className={styles.day}>{day}</span>
            <span className={styles.time}>{h}</span>
          </div>
        ))}
      </div>


      <div className={styles.contact}>
        <span className ={styles.contactLabel}>Contact Store</span>
        <div className={styles.phoneRow}>
          <img src={ICONS.phone} className={styles.smallIcon} alt="" />
          <span>{s.phone}</span>
        </div>
      </div>
    </article>
  );
}

export default function FindFuelStation() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Find a Fuel Station</h1>
      </section>
      <SearchBar />

      <div className={styles.grid}>
        <section className={styles.listCol}>
          {STATIONS.map((s) => (
            <StationCard key={s.id} s={s} />
          ))}
        </section>

        <section className={styles.mapCol}>
          <div className={styles.mapBox}>Map goes here</div>
        </section>
      </div>
    </main>
  );
}
