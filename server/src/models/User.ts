import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  role: {
    type: String,
    enum: ["superadmin", "admin", "faculty"],
    default: "admin",
  },

  college: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "College",
  },
});

// hash
schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

schema.methods.comparePassword = function (p: string) {
  return bcrypt.compare(p, this.password);
};

export default mongoose.model("User", schema);