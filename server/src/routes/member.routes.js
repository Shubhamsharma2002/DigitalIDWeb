import express from "express";

import {
  addMember,
  getAllMembers,
  updateMember,
  toggleMemberStatus,
} from "../controllers/member.controller.js";

import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", verifyAdmin, addMember);

router.get("/", verifyAdmin, getAllMembers);

router.patch("/:id", verifyAdmin, updateMember);

router.patch(
  "/:id/status",
  verifyAdmin,
  toggleMemberStatus
);

export default router;