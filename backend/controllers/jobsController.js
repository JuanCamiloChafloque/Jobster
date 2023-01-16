import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import BadRequestError from "../errors/BadRequestError.js";
import UnathenticatedError from "../errors/UnauthenticatedError.js";

export const createJob = async (req, res, next) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getAllJobs = async (req, res, next) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
};

export const showStats = async (req, res, next) => {};

export const deleteJob = async (req, res, next) => {};

export const updateJob = async (req, res, next) => {};
