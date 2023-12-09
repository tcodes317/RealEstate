import express from "express";
import { test } from "../controllers/user.controller.js";

const appRouter=express.Router();

appRouter.get("/test", test)


export default appRouter;