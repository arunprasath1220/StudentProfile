import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Dashboard</h1>
      <p>Welcome, Student! Here is your profile information.</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default StudentDashboard;
