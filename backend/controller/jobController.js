const Job = require("../models/Job");


exports.getAllJobs = async (req, res) => {
  try {
    const { status, date } = req.query;
    const filter = {}; 

    if (status) {
      filter.status = status;
    }

    if (date) {
      const parsedDate = new Date(date);
      parsedDate.setHours(0, 0, 0, 0);
      const nextDay = new Date(parsedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      filter.date = { $gte: parsedDate, $lt: nextDay };
    }

    const jobs = await Job.find(filter).sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /api/jobs
exports.addJob = async (req, res) => {
  try {
    const newJob = new Job(req.body); 

    const saved = await newJob.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT /api/jobs/:id
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/jobs/:id
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id });

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
