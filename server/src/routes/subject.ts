import express from "express";
import Subject from "../models/Subject";
import { protect } from "../middleware/auth";
import { tenant } from "../middleware/tenant";

const router = express.Router();

router.post("/", protect, tenant, async (req: any, res) => {
  const subject = await Subject.create({
    ...req.body,
    college: req.collegeId
  });

  res.json(subject);
});

router.get("/", protect, tenant, async (req: any, res) => {
  const data = await Subject.find({ college: req.collegeId });
  res.json(data);
});

export default router;