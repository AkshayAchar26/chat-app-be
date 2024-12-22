import { Router } from "express";

import {
  login,
  logout,
  signup,
  updateProfile,
  checkAuth,
} from "../controllers/auth.controllers.js";

import { authMiddleware } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", authMiddleware, logout);

router.get("/check", authMiddleware, checkAuth);

export default router;
