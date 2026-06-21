import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);
    const roles = decoded.roles || [];

    // Check if the user's roles array includes the required role
    if (requiredRole && !roles.includes(requiredRole)) {
      // Logged in but not authorized
      alert('Unauthorized access');
      return <Navigate to="/login" replace />;
    }

    // Authorized
    return children;
  } catch (err) {
    // Invalid token
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
