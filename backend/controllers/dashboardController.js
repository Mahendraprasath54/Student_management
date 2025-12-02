const Student = require("../models/Student");

const getDashboard = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const pass = await Student.countDocuments({ status: "Pass" });
    const fail = await Student.countDocuments({ status: "Fail" });

    const deptCount = await Student.aggregate([
      { $group: { _id: "$department", count: { $sum: 1 } } }
    ]);

    const avgMarks = await Student.aggregate([
      { $group: { _id: null, avg: { $avg: "$marks" } } }
    ]);

    res.json({
      totalStudents,
      pass,
      fail,
      deptCount,
      avgMarks: avgMarks[0]?.avg || 0
    });
  } catch (err) {
    res.status(500).json({ error: "Dashboard error" });
  }
};

module.exports = {
  getDashboard
};
