import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import LandingPage from "../pages/landingPage/LandingPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
