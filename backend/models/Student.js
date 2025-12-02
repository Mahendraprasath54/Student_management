const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollNo: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    department: String,
    year: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
