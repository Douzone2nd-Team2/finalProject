import { Routes, Route } from 'react-router-dom';

import Layout from './user/components/Layout';

import Login from './user/pages/Login';
import Main from './user/pages/main';
import Reset from './user/pages/Reset';
import MyInfo from './user/pages/MyInfo';

import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="main" element={<Main />} />
          <Route path="reset" element={<Reset />} />
          <Route path="info" element={<MyInfo />} />
        </Route>
        <Route path="admin" element={<AdminMain />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/employee" element={<EmployeePage />} />
      </Routes>
    </>
  );
};

export default App;
