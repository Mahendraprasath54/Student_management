const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.use("/api/students", studentRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
