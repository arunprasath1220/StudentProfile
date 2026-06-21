import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin! You have access to this page because of your role.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default AdminDashboard;
