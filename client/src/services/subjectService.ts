import { API } from "../api";

export const getSubjects = () => API.get("/subjects");

export const createSubject = (data: { name: string }) =>
  API.post("/subjects", data);