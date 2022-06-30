import { Outlet } from 'react-router-dom';
import Header from '../../outlets/Header.js';
import Sidebar from '../../outlets/Sidebar.js';
const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
