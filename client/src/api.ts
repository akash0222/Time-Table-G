import axios from "axios";

export const generateTimetable = (subjects: any) => {
  return axios.post("http://localhost:5000/api/timetable/generate", {
    subjects,
  });
};