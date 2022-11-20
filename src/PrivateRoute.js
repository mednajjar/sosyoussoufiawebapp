import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

export const PrivateRoute = ({ children}) => {
  const { currentUser: user } = useAuth()

  return user ? children : <Navigate to="/login" />;
  
}
export const ConectedRoute = ({ children}) => {
  const { currentUser: user } = useAuth()

  return !user ? children : <Navigate to="/dashboard/" />;
  
}
