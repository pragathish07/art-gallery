import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../services/AuthContext';

const AdminRoute = ({Children}) => {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/login" />;
  }

  return Children;
};

export default AdminRoute;
