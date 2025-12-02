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

      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Roll No</label>
          <input
            className="border p-2 rounded w-full"
            name="rollNo"
            placeholder="Enter roll number"
            value={form.rollNo}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Name</label>
          <input
            className="border p-2 rounded w-full"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            className="border p-2 rounded w-full"
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Contact</label>
          <input
            className="border p-2 rounded w-full"
            name="contact"
            placeholder="Enter contact number"
            value={form.contact}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium">Address</label>
          <input
            className="border p-2 rounded w-full"
            name="address"
            placeholder="Enter address"
            value={form.address}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">City</label>
          <input
            className="border p-2 rounded w-full"
            name="city"
            placeholder="Enter city"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">State</label>
          <input
            className="border p-2 rounded w-full"
            name="state"
            placeholder="Enter state"
            value={form.state}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Country</label>
          <input
            className="border p-2 rounded w-full"
            name="country"
            placeholder="Enter country"
            value={form.country}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">CGPA</label>
          <input
            className="border p-2 rounded w-full"
            type="number"
            step="0.01"
            name="cgpa"
            placeholder="Enter CGPA"
            value={form.cgpa}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Department</label>
          <input
            className="border p-2 rounded w-full"
            name="department"
            placeholder="Enter department"
            value={form.department}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Year</label>
          <input
            className="border p-2 rounded w-full"
            type="number"
            name="year"
            placeholder="Enter year"
            value={form.year}
            onChange={handleChange}
          />
        </div>
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
