import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/AuthContex/AuthContext";
import LoginPage from "./component/LoginPage/LoginPage";

import ProtectedRoute from "./component/ProctectedRoute/ProctectedRoute";
import SignUpPage from "./component/SignUpPage/SignUpPage";
import Home from "./component/DashBoard/Home";

const App: React.FC = () => {
  //defined my array

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
          </Route>
          {/* Add more protected routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
