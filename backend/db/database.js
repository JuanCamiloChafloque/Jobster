import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB database connected...");
  } catch (err) {
    console.log("Error connecting to DB: " + err);
    process.exit(1);
  }
};

export default connectDB;
