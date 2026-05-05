import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import College from "../models/College";

const router = express.Router();

// register admin + college
router.post("/register", async (req, res) => {
  const { name, email, password, collegeName } = req.body;

  const user = await User.create({ name, email, password });

  const college = await College.create({
    name: collegeName,
    owner: user._id
  });

  user.college = college._id;
  await user.save();

  res.json({ user, college });
});

router.post("/login", async (req, res) => {
  const user: any = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).json({ message: "No user" });

  const ok = await user.comparePassword(req.body.password);
  if (!ok) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign({
    id: user._id,
    role: user.role,
    college: user.college
  }, process.env.JWT_SECRET!);

  res.json({ token });
});

export default router;