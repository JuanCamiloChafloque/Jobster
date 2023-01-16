import express from "express";
import {
  createJob,
  deleteJob,
  updateJob,
  getAllJobs,
  showStats,
} from "../controllers/jobsController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(auth, createJob).get(auth, getAllJobs);
router.route("/stats").get(auth, showStats);
router.route("/:id").patch(auth, updateJob).delete(auth, deleteJob);

export default router;
