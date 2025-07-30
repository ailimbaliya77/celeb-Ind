import { Router } from "express";
import { authLogin, issueAccessToken, logout, logoutAll } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/login", authLogin);
authRouter.get("/refresh", issueAccessToken);
authRouter.delete("/logout", authenticate, logout);
authRouter.delete("/logout-all", authenticate, logoutAll);

export const AuthRouter = authRouter;
