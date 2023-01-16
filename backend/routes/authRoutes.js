import express from "express";
import { login, register, updateUser } from "../controllers/authController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/update").patch(auth, updateUser);

export default router;
