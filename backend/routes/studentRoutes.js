const express = require("express");
const {
  addStudent,
  getAllStudents,
  getStudentById,
  searchStudents,
  updateStudent,
  deleteStudent,
  filterStudents
} = require("../controllers/studentController");

const router = express.Router();

router.post("/", addStudent);
router.get("/", getAllStudents);
router.get("/search", searchStudents);
router.get("/filter", filterStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
