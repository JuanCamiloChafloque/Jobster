import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/database.js";

//Routes
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobsRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

//Static content config (Production)
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(
  express.static(path.resolve(__dirname, "../frontend/build", "index.html"))
);

//JSON & CORS
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);

//Run both server and client for production
/*app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});*/

//Middleware
connectDB();
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
