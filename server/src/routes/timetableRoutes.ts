import express from "express";
import { generateTimetable } from "../controllers/timetableController";
import { protect } from "../middleware/auth";

const router = express.Router();

router.post("/generate", protect, generateTimetable);

export default router;