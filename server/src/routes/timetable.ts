import express from "express";
import { generateTimetable } from "../services/timetableService";
import { protect } from "../middleware/auth";
import { tenant } from "../middleware/tenant";
import Timetable from "../models/Timetable";

const router = express.Router();

router.post("/generate", protect, tenant, async (req: any, res) => {
  const { subjects, days, slotsPerDay, classId } = req.body;

  const data = generateTimetable(subjects, days, slotsPerDay);

  const saved = await Timetable.create({
    college: req.collegeId,
    class: classId,
    version: 1,
    data,
    published: false
  });

  res.json(saved);
});

export default router;