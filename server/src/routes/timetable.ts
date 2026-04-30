import { Router } from "express";
import { protect } from "../middleware/auth";
import { generateTimetable } from "../utils/generateTimetable";

const router = Router();

router.post("/generate", protect, (req, res) => {
  const { subjects } = req.body;

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const slotsPerDay = 6;

  const timetable = generateTimetable(subjects, days, slotsPerDay);

  res.json(timetable);
});

export default router;