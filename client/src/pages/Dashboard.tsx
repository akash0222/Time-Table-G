import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { token } = useContext(AuthContext);
  const [file, setFile] = useState<File | null>(null);
  const [timetable, setTimetable] = useState<any>(null);

  const handleUpload = async () => {
    if (!file) return alert("Select file first");

    const formData = new FormData();
    formData.append("file", file);

    // 1️⃣ Upload Excel
    const uploadRes = await axios.post(
      "http://localhost:5000/api/upload",
      formData
    );

    const subjects = uploadRes.data.subjects;

    // 2️⃣ Generate timetable
    const res = await axios.post(
      "http://localhost:5000/api/timetable/generate",
      { subjects },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setTimetable(res.data);
  };

  return (
    <div>
      <h2>Dashboard</h2>

      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button onClick={handleUpload}>Upload & Generate</button>

      {timetable && (
        <pre>{JSON.stringify(timetable, null, 2)}</pre>
      )}
    </div>
  );
}