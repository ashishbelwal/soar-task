import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/dashboard/Settings";
import DashboardLayout from "./pages/DashboardLayout";
import NotFound from "./pages/NotFound";
import dummyEmployees from "./store/dummyEmployees";
import { addEmployee } from "./store/employeesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
localStorage.setItem("userId", "1");
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dummyEmployees.forEach((employee) => {
      dispatch(addEmployee(employee));
    });
  }, [dispatch]);
  return (
    <>
      <Router>
        <Routes>
          {/* Dashboard Layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
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
