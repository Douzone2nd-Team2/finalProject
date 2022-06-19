import MainPage from './user/pages/MainPage';
import LoginPage from './user/pages/LoginPage';
import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './user/pages/LoginPage';
import MainPage from './user/pages/MainPage';
import AdminMain from './admin/pages/AdminMain';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/main" element={<AdminMain />} />

        <Route path="/admin/employee" element={<EmployeePage />} />
      </Routes>
    </>
  );
};

export default App;
