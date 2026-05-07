import express from "express";
import {
  signupAdmin,
  loginAdmin,
  logoutAdmin,
  resetPassword,
  updateResetPassword,
} from "../controllers/auth.controller.js";
import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/signup", signupAdmin);
router.post("/login", loginAdmin);
router.post("/reset-password", resetPassword);
router.post("/logout", verifyAdmin, logoutAdmin);
router.post(
  "/update-reset-password",
  updateResetPassword
);

export default router;