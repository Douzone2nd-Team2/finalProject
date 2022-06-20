import { Routes, Route } from 'react-router-dom';

import LoginPage from './user/pages/LoginPage';
import MainPage from './user/pages/MainPage';
import ResetPage from './user/pages/ResetPage';
import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/admin" element={<AdminMain />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/employee" element={<EmployeePage />} />
      </Routes>
    </>
  );
};

export default App;
