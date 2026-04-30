type Subject = {
  name: string;
  hoursPerWeek: number;
};

export function generateTimetable(
  subjects: Subject[],
  days: string[],
  slotsPerDay: number
) {
  const timetable: Record<string, (string | null)[]> = {};

  days.forEach((day) => {
    timetable[day] = Array(slotsPerDay).fill(null);
  });

  subjects.forEach((sub) => {
    let hours = sub.hoursPerWeek;

    while (hours > 0) {
      const day = days[Math.floor(Math.random() * days.length)];
      const slot = Math.floor(Math.random() * slotsPerDay);

      if (!timetable[day][slot]) {
        timetable[day][slot] = sub.name;
        hours--;
      }
    }
  });

  return timetable;
}
