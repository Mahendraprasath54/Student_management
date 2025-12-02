import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({});

  useEffect(() => {
    api.get(`/students/${id}`).then((res) => setForm(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await api.put(`/students/${id}`, form);
    navigate("/students");
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Edit Student</h1>

      <div className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            className="border p-2 rounded"
            name={key}
            value={form[key]}
            onChange={handleChange}
          />
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-6"
      >
        Update
      </button>
    </div>
  );
}

export default EditStudent;
