import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected User Dashboard */}
        <Route
          path="/dashboard"
          element={
            token ? <Dashboard /> : <Navigate to="/" />
          }
        />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            token && user?.role === "admin"
              ? <AdminDashboard />
              : <Navigate to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;