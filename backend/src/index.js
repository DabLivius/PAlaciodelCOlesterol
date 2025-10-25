import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./db.js";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

connectDB();
app.use("/api", authRoutes);

app.listen(5000);
console.log("Servidor corriendo", 5000);
