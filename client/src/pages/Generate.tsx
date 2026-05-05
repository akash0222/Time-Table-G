// src/pages/Generate.tsx
import { useState } from "react";
import { Button, Container } from "@mui/material";
import API from "../api/axios";
import Navbar from "../components/Navbar";

export default function Generate() {
  const [result, setResult] = useState<any>(null);

  const handleGenerate = async () => {
    const res = await API.post("/timetable/generate", {
      subjects: [
        { name: "Math", hoursPerWeek: 4, faculty: "A" },
        { name: "Physics", hoursPerWeek: 3, faculty: "B" },
      ],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      slotsPerDay: 5,
    });

    setResult(res.data.data);
  };

  return (
    <>
      <Navbar />
      <Container>
        <h2>Generate Timetable</h2>
        <Button variant="contained" onClick={handleGenerate}>
          Generate
        </Button>

        {result && (
          <pre>{JSON.stringify(result, null, 2)}</pre>
        )}
      </Container>
    </>
  );
}