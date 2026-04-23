import express from "express";
import authRoutes from "./src/modules/auth/auth.routes";
import bookingRoutes from "./src/modules/booking/booking.routes";

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/bookings", bookingRoutes);

export default app;