import { Navigate, Outlet } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import Header from '../../outlets/Header';
import Footer from '../../outlets/Footer';

const PrivateRoute = () => {
  const cookies = new Cookies();

  const accessToken = cookies.get('accessToken');

  if (!accessToken || accessToken === 'undefined') return <Navigate to="/" />;

  return (
    <>
      <Header />
      {/* Outlet이 렌더링 해주는 JSX는 라우트에서 감싸주고 있는 라우트  */}
      <Outlet />
      <Footer />
    </>
  );
};

export default PrivateRoute;
