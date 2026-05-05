export function generateTimetable(subjects: any[], days: string[], slots: number) {
  const table: any = {};
  const facultyBusy: any = {};

  days.forEach(d => {
    table[d] = Array(slots).fill(null);
    facultyBusy[d] = new Set();
  });

  for (const sub of subjects) {
    let remaining = sub.hoursPerWeek;
    let tries = 0;

    while (remaining > 0 && tries < 2000) {
      const d = days[Math.floor(Math.random() * days.length)];
      const s = Math.floor(Math.random() * slots);

      if (!table[d][s] && !facultyBusy[d].has(sub.faculty)) {
        table[d][s] = sub.name;
        facultyBusy[d].add(sub.faculty);
        remaining--;
      }

      tries++;
    }

    if (remaining > 0) throw new Error("Scheduling failed");
  }

  return table;
}