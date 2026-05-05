import { API } from "../api";

export const getTeachers = () => API.get("/teachers");

export const createTeacher = (data: { name: string }) =>
  API.post("/teachers", data);