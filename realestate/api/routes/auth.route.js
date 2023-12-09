import express from "express";
import { signup } from "../controllers/auth.controller.js";

const appRouter = express.Router();

appRouter.post("/signup", signup);

export default appRouter