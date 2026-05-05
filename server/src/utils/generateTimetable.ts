export function generateTimetable(subjects: any[], days: string[], slots: number) {
  const table: any = {};

  days.forEach(d => table[d] = Array(slots).fill(null));

  subjects.forEach(sub => {
    let hours = sub.hoursPerWeek;

    while (hours > 0) {
      const day = days[Math.floor(Math.random() * days.length)];
      const slot = Math.floor(Math.random() * slots);

      if (!table[day][slot]) {
        table[day][slot] = sub.name;
        hours--;
      }
    }
  });

  return table;
}