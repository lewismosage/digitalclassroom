// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const isTokenExpired = () => {
  const expiry = localStorage.getItem('authTokenExpiry');
  return expiry ? new Date().getTime() > parseInt(expiry) : true;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('authToken');

  if (!token || isTokenExpired()) {
    localStorage.removeItem('authToken'); // Clear token if expired
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
