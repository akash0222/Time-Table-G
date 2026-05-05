import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  organizationId: mongoose.Types.ObjectId;
}

const userSchema = new mongoose.Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String,
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization"
  }
});

export default mongoose.model<IUser>("User", userSchema);