import mongoose from "mongoose";

export default mongoose.model("Timetable", new mongoose.Schema({
  college: Object,
  class: Object,
  version: Number,
  data: Object,
  published: Boolean
}, { timestamps: true }));