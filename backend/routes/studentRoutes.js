const express = require("express");
const {
  addStudent,
  getAllStudents,
  searchStudents,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

const router = express.Router();

router.post("/", addStudent);
router.get("/", getAllStudents);
router.get("/search", searchStudents);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
