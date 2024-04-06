import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/appLayout/AppLayout";
import Accounts from "../pages/appLayout/pages/Accounts";
import Budgets from "../pages/appLayout/pages/Budgets";
import Calendar from "../pages/appLayout/pages/Calendar";
import Dashboard from "../pages/appLayout/pages/Dashboard";
import Profile from "../pages/appLayout/pages/Profile";
import Transactions from "../pages/appLayout/pages/Transactions";
import LandingPage from "../pages/landingPage/LandingPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route path="/app" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
