import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';

// Student Pages
import StudentDashboard from './pages/Student/Dashboard';
import MyProfile from './pages/Student/MyProfile';

// Admin Pages
import AdminDashboard from './pages/Admin/Dashboard';
import AdmissionStudents from './pages/Admin/AdmissionStudents';
import StudentProfile from './pages/Admin/StudentProfile';
import StudentDetails from './pages/Admin/StudentDetails';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      
      {/* Admin Routes with Layout */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute requiredRole="admin">
            <Layout role="admin" />
          </ProtectedRoute>
        } 
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="admission-students" element={<AdmissionStudents />} />
        <Route path="student-profile" element={<StudentProfile />} />
        <Route path="student-details" element={<StudentDetails />} />
      </Route>
      
      {/* Student Routes with Layout */}
      <Route 
        path="/student" 
        element={
          <ProtectedRoute requiredRole="student">
            <Layout role="student" />
          </ProtectedRoute>
        } 
      >
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<MyProfile />} />
        <Route path="dashboard" element={<StudentDashboard />} />
      </Route>
      
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}

export default App;
