import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },

  lastName: {
    type: String,
    maxLength: 20,
    trim: true,
    default: "lastName",
  },

  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },

  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 6,
  },

  location: {
    type: String,
    maxLength: 20,
    trim: true,
    default: "city",
  },
});

export default mongoose.model("User", UserSchema);
