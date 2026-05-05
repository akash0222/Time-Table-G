import mongoose from "mongoose";

export default mongoose.model("Class", new mongoose.Schema({
  name: String,
  college: { type: mongoose.Schema.Types.ObjectId, ref: "College" }
}));