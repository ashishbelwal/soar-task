import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/dashboard";
import Settings from "./pages/dashboard/Settings";
import DashboardLayout from "./pages/DashboardLayout";
import NotFound from "./pages/NotFound";
import AllCards from "./pages/dashboard/AllCards";
localStorage.setItem("userId", "1");
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-cards" element={<AllCards />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
