import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import timetableRoutes from "./routes/timetableRoutes";

app.use("/api/timetable", timetableRoutes);

app.use("/api/auth", authRoutes);

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/timetable", require("./routes/timetableRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});