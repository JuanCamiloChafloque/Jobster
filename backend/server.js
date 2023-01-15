import express from "express";
import dotenv from "dotenv";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import connectDB from "./db/database.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000;

//Middleware
connectDB();
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
