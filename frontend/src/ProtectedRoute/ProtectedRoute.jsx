import react from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');        
   if (!token) return <Navigate to="/login" />;
  if (role && userRole !== role) {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return <Navigate to="/" />;
  } 

  return children;
};

export default ProtectedRoute;