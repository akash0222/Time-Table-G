import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db";

import authRoutes from "./routes/authRoutes";
import timetableRoutes from "./routes/timetableRoutes";
import subjectRoutes from "./routes/subjectsRoutes";
import teacherRoutes from "./routes/teachersRoutes";

dotenv.config();
connectDB();

const app = express();

// ✅ 1. Security middleware (ADD HERE)
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 min
    max: 100, // limit each IP
  })
);

// ✅ 2. Other middleware
app.use(cors());
app.use(express.json());

// ✅ 3. Routes
app.use("/api/auth", authRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/teachers", teacherRoutes);

// ✅ 4. Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});