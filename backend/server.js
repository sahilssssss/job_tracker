const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB error:", err));

app.use("/api/jobs", require("./routes/jobRoutes"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
