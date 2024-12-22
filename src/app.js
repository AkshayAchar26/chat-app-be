import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://akshayachar26.github.io"],
    credentials: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);

export { app };
