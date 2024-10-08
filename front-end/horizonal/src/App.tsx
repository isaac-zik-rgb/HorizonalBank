import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./component/AuthContex/AuthContext";
import LoginPage from "./component/LoginPage/LoginPage";

import TransferPage from "./component/PaymentTransfer/TransferPage";
import ProtectedRoute from "./component/ProctectedRoute/ProctectedRoute";
import SignUpPage from "./component/SignUpPage/SignUpPage";
import Home from "./component/DashBoard/Home";
import BankPage from "./component/BankAccount/BankPage";
import TransactionHistroyPage from "./component/TransactionHistory/TransactionHistroyPage";
import HomePage from "./component/HomePage/HomePage";
const App: React.FC = () => {
  //defined my array

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/dashboard" element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="bank" element={<BankPage />} />
            <Route
              path="transactionHistory"
              element={<TransactionHistroyPage />}
            />
            <Route path="transfer" element={<TransferPage />} />
          </Route>
          {/* Add more protected routes here */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
