import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.model.js";

export const verifyAdmin = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request",
      });
    }

    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    const admin = await Admin.findById(decoded.id)
      .populate("organization")
      .select("-password -refreshToken");

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid access token",
      });
    }

    req.admin = admin;

    req.organization =
      admin.organization?._id || admin.organization;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};