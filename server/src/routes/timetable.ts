import express from "express";
import { generateTimetable } from "../utils/generateTimetable";
import { protect } from "../middleware/auth";
import Timetable from "../models/Timetable";

const router = express.Router();

router.post("/generate", protect, async (req: any, res) => {
  try {
    const { subjects, days, slotsPerDay } = req.body;

    const timetable = generateTimetable(subjects, days, slotsPerDay);

    const saved = await Timetable.create({
      user: req.user.id,
      data: timetable,
    });

    res.json(saved);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

export default router;