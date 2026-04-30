import mongoose from "mongoose";

interface ISubject {
  name: string;
  faculty: string;
  hoursPerWeek: number;
}

const subjectSchema = new mongoose.Schema<ISubject>({
  name: String,
  faculty: String,
  hoursPerWeek: Number,
});

export default mongoose.model<ISubject>("Subject", subjectSchema);