import express from "express";
import dotenv from "dotenv";
import authRouter from "./Authentication/Routers/accessToken.js";
import errorHandler from "./Authentication/Middlewares/errorMiddleware.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT_NO;

// Top Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/token", authRouter);

// Bottom Middlewares.
app.use(errorHandler);

// Start App
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
