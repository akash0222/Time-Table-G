import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  data: Object,
});

export default mongoose.model("Timetable", timetableSchema);