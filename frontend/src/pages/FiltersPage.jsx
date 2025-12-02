import { useState } from "react";
import api from "../api/api";

function FiltersPage() {
  const [department, setDepartment] = useState("all");
  const [city, setCity] = useState("all");
  const [year, setYear] = useState("all");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleFilter = async () => {
    try {
      setLoading(true);
      const res = await api.get("/students/filter", {
        params: { department, city, year },
      });
      setStudents(res.data);
      setHasSearched(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Filters</h1>

      <div className="space-y-3 mb-4">
        <select
          className="border p-2 rounded w-64"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="all">All Departments</option>
          <option value="IT">IT</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
        </select>

        <select
          className="border p-2 rounded w-64"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="all">All Cities</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <select
          className="border p-2 rounded w-64"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="all">All Years</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>

        <div>
          <button
            onClick={handleFilter}
            disabled={loading}
            className="bg-gray-900 text-white px-4 py-2 rounded mt-2 disabled:opacity-60"
          >
            {loading ? "Applying..." : "Apply Filters"}
          </button>
        </div>
      </div>

      {hasSearched && students.length === 0 && (
        <p className="text-gray-500">No students found for selected filters.</p>
      )}

      {students.length > 0 && (
        <table className="w-full bg-white rounded shadow">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3">Roll No</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">City</th>
              <th className="p-3">CGPA</th>
              <th className="p-3">Department</th>
              <th className="p-3">Year</th>
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
                <td className="p-3">{s.department}</td>
                <td className="p-3">{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FiltersPage;
