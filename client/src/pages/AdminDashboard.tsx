import { useEffect, useState } from "react";
import { getSubjects, createSubject } from "../services/subjectService";
import { getTeachers, createTeacher } from "../services/teacherService";

// ✅ Types (important)
type Subject = {
  _id: string;
  name: string;
};

type Teacher = {
  _id: string;
  name: string;
};

export default function AdminDashboard() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const [subjectName, setSubjectName] = useState("");
  const [teacherName, setTeacherName] = useState("");

  // 🔄 Fetch data
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const subRes = await getSubjects();
      const teachRes = await getTeachers();

      setSubjects(subRes.data || []);
      setTeachers(teachRes.data || []);
    } catch (err) {
      console.error("Fetch error", err);
      alert("Failed to load data");
    }
  };

  // ➕ Add subject
  const handleAddSubject = async () => {
    if (!subjectName.trim()) return alert("Enter subject name");

    try {
      await createSubject({ name: subjectName });
      setSubjectName("");
      fetchData();
    } catch (err) {
      alert("Failed to add subject");
    }
  };

  // ➕ Add teacher
  const handleAddTeacher = async () => {
    if (!teacherName.trim()) return alert("Enter teacher name");

    try {
      await createTeacher({ name: teacherName });
      setTeacherName("");
      fetchData();
    } catch (err) {
      alert("Failed to add teacher");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* SUBJECTS */}
      <h3>Subjects</h3>
      <input
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="New Subject"
      />
      <button onClick={handleAddSubject}>Add Subject</button>

      <ul>
        {subjects.map((s) => (
          <li key={s._id}>{s.name}</li>
        ))}
      </ul>

      {/* TEACHERS */}
      <h3>Teachers</h3>
      <input
        value={teacherName}
        onChange={(e) => setTeacherName(e.target.value)}
        placeholder="New Teacher"
      />
      <button onClick={handleAddTeacher}>Add Teacher</button>

      <ul>
        {teachers.map((t) => (
          <li key={t._id}>{t.name}</li>
        ))}
      </ul>
    </div>
  );
}