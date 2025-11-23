import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema(
  {
    // replace with real user
    userId: { type: String, required: true },
    plate: { type: String, required: true },
    fuelType: { type: String, reuqired: true },
    paymentMethod: { type: String },
    confirmOnArrival: { type: Boolean, default: false },
  },
  { timestamp: true }
);

<<<<<<< HEAD
export default mongoose.model("Vehicle", VehicleSchema);
=======
export default mongoose.model("Vehicle", VehicleSchema);
>>>>>>> main
