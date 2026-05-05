import mongoose from "mongoose";

export default mongoose.model("College", new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}));