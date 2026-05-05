import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth";
import subjectRoutes from "./routes/subject";
import timetableRoutes from "./routes/timetable";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/timetable", timetableRoutes);

mongoose.connect(process.env.MONGO_URI!)
  .then(() => app.listen(5000, () => console.log("Server running")));