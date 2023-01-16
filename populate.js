import { readFile } from "fs/promises";
import dotenv from "dotenv";
import connectDB from "./backend/db/database.js";
import Job from "./backend/models/Job.js";

dotenv.config();

const start = async () => {
  try {
    await connectDB();
    await Job.deleteMany();

    const jsonJobs = JSON.parse(
      await readFile(new URL("./mock_data.json", import.meta.url))
    );
    await Job.create(jsonJobs);
    console.log("Jobs DB Populated...");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
