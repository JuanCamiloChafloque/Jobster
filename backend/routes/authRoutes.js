import express from "express";
import rateLimiter from "express-rate-limit";
import { login, register, updateUser } from "../controllers/authController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, //15 mins
  max: 10,
  message:
    "Too many requests from this IP address, please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/update").patch(auth, updateUser);

export default router;
