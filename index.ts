import express from "express";
import { config } from "dotenv";
import cors from "cors";
import carsRouter from "./routes/cars";
import bookingRouter from "./routes/bookings";
import authRouter from "./routes/auth";
import cookieParser from "cookie-parser";
config();
const app = express();

const Port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true              
}));

app.use(cookieParser());


app.use("/auth", authRouter);
app.use("/api", carsRouter);
app.use("/api", bookingRouter);

app.listen(Port, () => {
  console.log(`Server running on port ${Port}`);
});
