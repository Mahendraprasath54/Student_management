import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  List,
} from "lucide-react";
import { motion } from "framer-motion";

const SidebarItem = ({ to, icon: Icon, label }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-md transition
          cursor-pointer
          ${active ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}
        `}
      >
        <Icon size={20} />
        <span className="text-sm">{label}</span>
      </div>
    </Link>
  );
};

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5 gap-3">
        <h1 className="text-xl font-bold mb-6">Student Admin</h1>

        <SidebarItem to="/" icon={LayoutDashboard} label="Dashboard" />
        <SidebarItem to="/students" icon={List} label="Student List" />
        <SidebarItem to="/add" icon={UserPlus} label="Add Student" />
        <SidebarItem to="/filters" icon={Users} label="Filters" />
      </div>

      {/* Main Content */}
      <motion.div
        className="flex-1 p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Outlet />
      </motion.div>

    </div>
  );
}

export default DashboardLayout;
