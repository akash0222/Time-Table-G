export const generateTimetable = async (req, res) => {
  const { subjects, teachers, slots } = req.body;

  let timetable: any[] = [];

  for (let i = 0; i < slots.length; i++) {
    timetable.push({
      slot: slots[i],
      subject: subjects[i % subjects.length],
      teacher: teachers[i % teachers.length]
    });
  }

  res.json(timetable);
};