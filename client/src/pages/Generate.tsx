import { useState } from "react";
import API from "./api";

export default function Generate() {
  const [data, setData] = useState<any>(null);

  const generate = async () => {
    const res = await API.post("/timetable/generate", {
      subjects: [
        { name: "Math", hoursPerWeek: 4 },
        { name: "Physics", hoursPerWeek: 3 }
      ],
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      slotsPerDay: 5
    });

    setData(res.data.data);
  };

  return (
    <div>
      <button onClick={generate}>Generate</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}