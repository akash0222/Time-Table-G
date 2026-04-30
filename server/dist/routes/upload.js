"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const xlsx_1 = __importDefault(require("xlsx"));
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ dest: "uploads/" });
router.post("/", upload.single("file"), (req, res) => {
    try {
        const file = req.file;
        if (!file)
            return res.status(400).json({ msg: "No file uploaded" });
        const workbook = xlsx_1.default.readFile(file.path);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = xlsx_1.default.utils.sheet_to_json(sheet);
        // Expecting Excel columns: name, hoursPerWeek
        const subjects = data.map((row) => ({
            name: row.name,
            hoursPerWeek: Number(row.hoursPerWeek),
        }));
        res.json({ subjects });
    }
    catch (err) {
        res.status(500).json({ msg: "Error reading file" });
    }
});
exports.default = router;
