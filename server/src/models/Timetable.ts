import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true
  },
  className: String,
  schedule: Array
});

export default mongoose.model("Timetable", timetableSchema);