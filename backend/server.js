const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// const studentRoutes = require("./routes/studentRoutes");
// const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log("MongoDB Error:", err));

app.get("/", (req, res) => {
  res.send("Backend running...");
});

// // Routes
// app.use("/api/students", studentRoutes);
// app.use("/api/dashboard", dashboardRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
