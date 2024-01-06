import express from "express";
import authenticate from "../Controllers/authenticate.js";

const authRouter = express.Router();

authRouter.post("/", authenticate);

export default authRouter;
