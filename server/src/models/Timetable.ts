import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  organizationId: mongoose.Schema.Types.ObjectId,
  className: String,
  schedule: Array
});

export default mongoose.model("Timetable", timetableSchema);