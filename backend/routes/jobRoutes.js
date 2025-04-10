// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const JobController = require("../controller/jobController");


router.get("/", JobController.getAllJobs);
router.post("/", JobController.addJob);
router.put("/:id", JobController.updateJob);
router.delete("/:id", JobController.deleteJob);

module.exports = router;
