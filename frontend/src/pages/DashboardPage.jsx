import { motion } from "framer-motion";
import DashboardCard from "../components/DashboardCard";
import ChartCard from "../components/ChartCard";
import api from "../api/api";
import { useEffect, useState } from "react";

function DashboardPage() {
  const [data, setData] = useState({
    total: 0,
    avgCgpa: 0,
    deptCount: [],
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    const res = await api.get("/dashboard");
    setData(res.data);
  };

  const pieData = {
    labels: data.deptCount.map((d) => d._id),
    datasets: [
      {
        data: data.deptCount.map((d) => d.count),
        backgroundColor: ["#4f46e5", "#22c55e", "#ef4444", "#f59e0b", "#06b6d4"],
      },
    ],
  };

  const barData = {
    labels: ["Avg CGPA"],
    datasets: [
      {
        label: "CGPA",
        data: [data.avgCgpa],
        backgroundColor: "#4f46e5",
      },
    ],
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <DashboardCard title="Total Students" value={data.total} />
        <DashboardCard title="Average CGPA" value={data.avgCgpa} />
        <DashboardCard title="Departments" value={data.deptCount.length} />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ChartCard type="pie" title="Department Distribution" data={pieData} />
        <ChartCard type="bar" title="Average CGPA" data={barData} />
      </div>
    </motion.div>
  );
}

export default DashboardPage;
