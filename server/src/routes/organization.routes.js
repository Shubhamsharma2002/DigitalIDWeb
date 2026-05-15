import express from "express";

import {
  getOrganization,
  updateOrganization,
} from "../controllers/organization.controller.js";

import { verifyAdmin } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyAdmin, getOrganization);

router.patch("/", verifyAdmin, updateOrganization);




export default router;
