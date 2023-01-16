import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import cors from "cors";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/database.js";

//Routes
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobsRoutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

//JSON & CORS
app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", jobRoutes);

//Middleware
connectDB();
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
