import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import timetableRoutes from "./routes/timetable";
import authRoutes from "./routes/auth";
import uploadRoutes from "./routes/upload";
import { seedAdmin } from "./utils/seedAdmin";
import dotenv from "dotenv";

dotenv.config(); // ✅ ADD THIS LINE

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/upload", uploadRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(async () => {
    console.log("MongoDB Connected");

    await seedAdmin();

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000");
    });
  })
  .catch((err) => console.log(err));