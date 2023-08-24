import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/LandingPage";
import Dashboard from "../pages/dashboard/Dashboard";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
