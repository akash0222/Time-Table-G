import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import timetableRoutes from "./routes/timetable";
import authRoutes from "./routes/auth";
import uploadRoutes from "./routes/upload";
import { seedAdmin } from "./utils/seedAdmin";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/upload", uploadRoutes);

mongoose.connect(process.env.MONGO_URI as string, {
  serverSelectionTimeoutMS: 500000,
  family: 4,
  tls: true,
})
  .then(async () => {
    console.log("✅ MongoDB Connected");

    await seedAdmin();

    app.listen(5000, () => {
      console.log("🚀 Server running on http://localhost:5000");
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB Error:", err.message);
  });