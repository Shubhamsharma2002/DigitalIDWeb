import express from "express";
import {
  signupAdmin,
  loginAdmin,
  logoutAdmin,
  resetPassword,
} from "../controllers/auth.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupAdmin);
router.post("/login", loginAdmin);
router.post("/reset-password", resetPassword);
router.post("/logout", verifyAdmin, logoutAdmin);

export default router;