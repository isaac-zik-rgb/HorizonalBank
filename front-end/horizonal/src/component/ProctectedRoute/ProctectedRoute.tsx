import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContex/AuthContext";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, verifyToken } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const valid = await verifyToken(); // Await the token verification
      setLoading(false);
      if (!valid) {
        <Navigate to="/login" />;
      }
    };

    checkAuth();
  }, [verifyToken]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
