import { API } from "../api";

export default function Dashboard() {
  const generate = async () => {
    const token = localStorage.getItem("token");

    const res = await API.post(
      "/timetable/generate",
      {
        subjects: ["Math", "Physics"],
        teachers: ["A", "B"],
        slots: ["Mon", "Tue"]
      },
      {
        headers: { Authorization: token }
      }
    );

    console.log(res.data);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={generate}>Generate Timetable</button>
    </div>
  );
}