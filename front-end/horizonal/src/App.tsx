import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/AuthContex/AuthContext";
import LoginPage from "./component/LoginPage/LoginPage";
import Dashboard from "./component/DashBoard/Dashboard";
import ProtectedRoute from "./component/ProctectedRoute/ProctectedRoute";
import SignUpPage from "./component/SignUpPage/SignUpPage";
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
          </Route>
          {/* Add more protected routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
