import { Routes, Route } from 'react-router-dom';

import Layout from './user/components/Layout';
import AdminLayout from './admin/components/AdminLayout';

import Login from './user/pages/Login';
import Main from './user/pages/main';
import Reset from './user/pages/Reset';
import MyInfo from './user/pages/MyInfo';
import Search from './user/pages/search';

import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';
import ResourcePage from './admin/components/Resource/ResourcePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="main" element={<Main />} />
          <Route path="reset" element={<Reset />} />
          <Route path="info" element={<MyInfo />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="admin" element={<AdminMain />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin/resource" element={<ResourcePage />} />
          <Route path="/admin/employee" element={<EmployeePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
