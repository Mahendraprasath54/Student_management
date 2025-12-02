import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentList from "./pages/StudentList.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import EditStudent from "./pages/EditStudent.jsx";
import FiltersPage from "./pages/FiltersPage.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<FiltersPage />} />
          <Route path="students" element={<StudentList />} />
          <Route path="add" element={<AddStudent />} />
          <Route path="edit/:id" element={<EditStudent />} />
          <Route path="filters" element={<FiltersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
