const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    rollNo: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },

    address: { type: String },
    city: { type: String },
    state: { type: String },
    country: { type: String },

    cgpa: { type: Number },

    department: String,
    year: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
