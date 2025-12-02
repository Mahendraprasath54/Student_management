function DashboardCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
      <h2 className="text-gray-500 text-sm">{title}</h2>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default DashboardCard;
