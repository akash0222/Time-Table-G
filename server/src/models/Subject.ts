import mongoose from "mongoose";

export default mongoose.model("Subject", new mongoose.Schema({
  name: String,
  faculty: String,
  hoursPerWeek: Number,
  college: { type: mongoose.Schema.Types.ObjectId, ref: "College" },
class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" }
}));