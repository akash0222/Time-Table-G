import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const protect = async (req: any, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ msg: "No token" });

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

    const user = await User.findById(decoded.id);

    if (!user) return res.status(401).json({ msg: "User not found" });

    req.user = user;
    req.orgId = user.organizationId; // 🔥 KEY LINE

    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};