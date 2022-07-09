import { Navigate, Outlet } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import {
  GlobalContainer,
  GlobalHeader,
  GlobalBody,
  MainContainer,
} from '../../styles/GlobalLayout.js';

import Header from '../../outlets/Header.js';
import Sidebar from '../../outlets/Sidebar.js';

const AdminPrivateRoute = () => {
  const cookies = new Cookies();
  const accessToken = cookies.get('accessToken');

  if (!accessToken || accessToken === 'undefined')
    return <Navigate to="/admin/login" />;

  return (
    <GlobalContainer>
      <GlobalHeader>
        <Header />
      </GlobalHeader>
      <GlobalBody>
        <Sidebar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </GlobalBody>
    </GlobalContainer>
  );
};

export default AdminPrivateRoute;
