const Student = require("../models/Student");

const addStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: "Cannot add student" });
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch all students" });
  }
};

const searchStudents = async (req, res) => {
  try {
    const { search } = req.query;

    const students = await Student.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { rollNo: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { department: { $regex: search, $options: "i" } }
      ]
    });

    res.json(students);
  } catch (err) {
    res.status(500).json({ error: "Cannot search students" });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Cannot update student" });
  }
};

const deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: "Cannot delete student" });
  }
};

module.exports = {
  addStudent,
  getAllStudents,
  searchStudents,
  updateStudent,
  deleteStudent
};
