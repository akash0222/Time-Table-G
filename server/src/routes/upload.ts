import { Router } from "express";
import multer from "multer";
import XLSX from "xlsx";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ msg: "No file uploaded" });

    const workbook = XLSX.readFile(file.path);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    const data = XLSX.utils.sheet_to_json(sheet);

    // Expecting Excel columns: name, hoursPerWeek
    const subjects = data.map((row: any) => ({
      name: row.name,
      hoursPerWeek: Number(row.hoursPerWeek),
    }));

    res.json({ subjects });
  } catch (err) {
    res.status(500).json({ msg: "Error reading file" });
  }
});

export default router;