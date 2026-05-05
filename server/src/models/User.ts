import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  organizationId: mongoose.Types.ObjectId;

  // ✅ ADD THIS
  role: "admin" | "faculty";
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: { type: String, required: true },

  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true
  },

  // ✅ ADD THIS BLOCK
  role: {
    type: String,
    enum: ["admin", "faculty"],
    default: "admin"
  }

}, { timestamps: true });

export default mongoose.model<IUser>("User", userSchema);
