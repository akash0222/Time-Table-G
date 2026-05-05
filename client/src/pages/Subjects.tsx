// src/pages/Subjects.tsx
import { useState } from "react";
import { TextField, Button, Container } from "@mui/material";
import API from "../api/axios";
import Navbar from "../components/Navbar";

export default function Subjects() {
  const [name, setName] = useState("");
  const [hours, setHours] = useState(0);

  const handleAdd = async () => {
    await API.post("/subjects", { name, hoursPerWeek: hours });
    alert("Subject Added");
  };

  return (
    <>
      <Navbar />
      <Container>
        <h2>Add Subject</h2>
        <TextField label="Name" fullWidth onChange={(e) => setName(e.target.value)} />
        <TextField label="Hours" type="number" fullWidth onChange={(e) => setHours(Number(e.target.value))} />
        <Button variant="contained" onClick={handleAdd}>Add</Button>
      </Container>
    </>
  );
}