import { Navigate, Outlet } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import Header from '../../outlets/Header.js';
import Sidebar from '../../outlets/Sidebar.js';

const AdminPrivateRoute = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');

  if (!accessToken || accessToken === 'undefined')
    return <Navigate to="/admin/login" />;

  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default AdminPrivateRoute;
