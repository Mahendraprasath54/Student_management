import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    rollNo: "",
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    state: "",
    country: "",
    cgpa: "",
    department: "",
    year: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await api.post("/students", form);
    navigate("/students");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Add Student</h1>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            className="border p-2 rounded"
            placeholder={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded mt-6"
      >
        Submit
      </button>
    </div>
  );
}

export default AddStudent;
