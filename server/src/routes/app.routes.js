import express from "express";

import { getMyDigitalId } from "../controllers/app.controller.js";

const router = express.Router();

router.get("/my-id", getMyDigitalId);

export default router;
