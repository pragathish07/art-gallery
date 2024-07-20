
import { useAuth } from '../services/AuthContext';
import { Navigate } from 'react-router-dom';
import React from 'react'

function protectedRoute({roleRequired, children}) {
  const { currentUser ,isAdmin } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
}

export default protectedRoute