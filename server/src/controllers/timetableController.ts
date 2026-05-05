import Timetable from "../models/Timetable";

export const generateTimetable = async (req: any, res: any) => {
  const { subjects, teachers, slots, className } = req.body;

  let schedule: any[] = [];

  for (let i = 0; i < slots.length; i++) {
    schedule.push({
      slot: slots[i],
      subject: subjects[i % subjects.length],
      teacher: teachers[i % teachers.length]
    });
  }

  const timetable = await Timetable.create({
    organizationId: req.orgId, // 🔥 MULTI-TENANT KEY
    className,
    schedule
  });

  res.json(timetable);
};