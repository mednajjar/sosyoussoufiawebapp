import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to="/login" />;

}
export const ConectedRoute = ({ children }) => {
  const { currentUser } = useAuth()

  return !currentUser ? children : <Navigate to="/dashboard/" />;

}
