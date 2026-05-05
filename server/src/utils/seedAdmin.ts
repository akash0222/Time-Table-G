import User from "../models/User";
import bcrypt from "bcryptjs";

export const seedAdmin = async () => {
  const existing = await User.findOne({ email: "admin@gmail.com" });

  if (existing) {
    console.log("✅ Admin already exists");
    return;
  }

  const hashedPassword = await bcrypt.hash("123456", 10);

  await User.create({
    name: "Admin",
    email: "admin@gmail.com",
    password: hashedPassword, // ✅ FIXED
    role: "admin",
  });

  console.log("🔥 Admin created: admin@gmail.com / 123456");
};