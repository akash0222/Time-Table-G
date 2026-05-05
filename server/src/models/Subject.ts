import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: String,
  faculty: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  hoursPerWeek: Number,
  maxPerDay: { type: Number, default: 2 },
});

export default mongoose.model("Subject", subjectSchema);