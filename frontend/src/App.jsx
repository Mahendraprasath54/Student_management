import { BrowserRouter, Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage.jsx";
import StudentList from "./pages/StudentList.jsx";
import AddStudent from "./pages/AddStudent.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="students" element={<StudentList />} />
          <Route path="add" element={<AddStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
