import { useEffect, useState } from "react";
import api from "../api/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const loadStudents = async () => {
    const res = await api.get("/students");
    setStudents(res.data);
  };

  const handleSearch = async () => {
    if (search.trim() === "") return loadStudents();
    const res = await api.get(`/students/search?search=${search}`);
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/students/${id}`);
    loadStudents();
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-semibold">Student List</h1>
        <Link to="/add">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Student
          </button>
        </Link>
      </div>

      <div className="flex gap-3 mb-4">
        <input
          className="border rounded px-3 py-2 w-64"
          placeholder="Search students..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <table className="w-full bg-white rounded shadow">
        <thead className="bg-gray-900 text-white">
          <tr>
            <th className="p-3">Roll No</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">City</th>
            <th className="p-3">CGPA</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id} className="border-b hover:bg-gray-100">
              <td className="p-3">{s.rollNo}</td>
              <td className="p-3">{s.name}</td>
              <td className="p-3">{s.email}</td>
              <td className="p-3">{s.city}</td>
              <td className="p-3">{s.cgpa}</td>
              <td className="p-3 space-x-2">
                <Link to={`/edit/${s._id}`}>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded">
                    Edit
                  </button>
                </Link>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleDelete(s._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default StudentList;
