import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import { verifyAdmin } from "./middlewares/auth.middleware.js";
import errorHandler from "./middlewares/error.middleware.js";
import authRoutes from "./routes/auth.routes.js";
import organizationRoutes from "./routes/organization.routes.js";
import memberRoutes from "./routes/member.routes.js";
import appRoutes from "./routes/app.routes.js";
const server = express();

server.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
    credentials: true,
  })
);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

server.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running 🚀",
  });
});

server.get("/api/v1/me", verifyAdmin, (req, res) => {
  res.status(200).json({
    success: true,
    admin: req.admin,
  });
});

server.use("/api/v1/auth", authRoutes);
server.use(
  "/api/v1/organization",
  organizationRoutes
);
server.use("/api/v1/members", memberRoutes);
server.use("/api/v1/app", appRoutes);
server.use(errorHandler);

export { server };