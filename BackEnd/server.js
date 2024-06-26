import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDb from "./db/connectToMongoDb.js";

import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

// Set CORS configuration
const corsOptions = {
  origin: "https://chat-freeh.netlify.app", // Ganti dengan domain frontend Anda yang sebenarnya
  methods: ["GET", "POST"], // Metode HTTP yang diizinkan
  allowedHeaders: ["Content-Type", "Authorization"], // Header yang diizinkan
};

app.use(cors(corsOptions));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/FrontEnd/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "FrontEnd", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is Running on port ${PORT}`);
});
