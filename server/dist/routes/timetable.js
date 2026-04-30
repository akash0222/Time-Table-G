"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const generateTimetable_1 = require("../utils/generateTimetable");
const router = (0, express_1.Router)();
router.post("/generate", auth_1.protect, (req, res) => {
    const { subjects } = req.body;
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const slotsPerDay = 6;
    const timetable = (0, generateTimetable_1.generateTimetable)(subjects, days, slotsPerDay);
    res.json(timetable);
});
exports.default = router;
