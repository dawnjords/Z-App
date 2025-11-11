import "dotenv/config";
import mongoose from "mongoose";
import Station from "./models/Station.js";

const data = [
  {
    name: "Z Kingsway Station",
    address: "26 Clevedon Road, Papakura",
    phone: "09 2988185",
    features: ["toilet","gas","coffeecup","atm"],
    hours: { Sun:"24 Hours", Mon:"24 Hours", Tue:"24 Hours", Wed:"24 Hours", Thu:"24 Hours", Fri:"24 Hours", Sat:"24 Hours" },
    location: { type: "Point", coordinates: [174.9445, -37.0625] } // [lng, lat]
  },
  {
    name: "Z Papakura North",
    address: "26 Clevedon Road, Papakura",
    phone: "09 2988185",
    features: ["toilet","gas","coffeecup","atm"],
    hours: { Sun:"24 Hours", Mon:"24 Hours", Tue:"24 Hours", Wed:"24 Hours", Thu:"24 Hours", Fri:"24 Hours", Sat:"24 Hours" },
    location: { type: "Point", coordinates: [174.9400, -37.0560] }
  }
];

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  await Station.deleteMany({});
  const out = await Station.insertMany(data);
  console.log(`✅ Inserted ${out.length} stations`);
  await mongoose.disconnect();
  process.exit(0);
})();
