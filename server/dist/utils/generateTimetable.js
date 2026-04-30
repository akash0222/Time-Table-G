"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTimetable = generateTimetable;
function generateTimetable(subjects, days, slotsPerDay) {
    const timetable = {};
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
