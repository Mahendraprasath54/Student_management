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

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: "Cannot fetch student" });
  }
};

const searchStudents = async (req, res) => {
  try {
    const { search } = req.query;

    const regex = new RegExp(search, "i"); 

    const students = await Student.find({
      $or: [
        { name: regex },
        { rollNo: regex },
        { email: regex },
        { contact: regex },
        { department: regex },
        { address: regex },
        { city: regex },
        { state: regex },
        { country: regex },
        { cgpa: isNaN(search) ? undefined : Number(search) }
      ].filter(Boolean)
    });

    res.json(students);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Cannot search students" });
  }
};

const filterStudents = async (req, res) => {
  try {
    const { department, city, year } = req.query;

    const filter = {};
    if (department && department !== "all") {
      filter.department = new RegExp(`^${department}$`, "i");
    }
    if (city && city !== "all") {
      filter.city = new RegExp(`^${city}$`, "i");
    }
    if (year && year !== "all") filter.year = Number(year);

    const students = await Student.find(filter);
    res.json(students);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Cannot filter students" });
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
  getStudentById,
  searchStudents,
  updateStudent,
  deleteStudent,
  filterStudents
};
