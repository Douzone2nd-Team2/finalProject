import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import { userState } from './user/recoil/user';
import { isEmptyObject } from './user/utils/jsFunction';

import axios from 'axios';
import PrivateRoute from './user/components/Layout';

import Login from './user/pages/Login';
import Main from './user/pages/main';
import Reset from './user/pages/Reset';
import MyInfo from './user/pages/MyInfo';
import Search from './user/pages/search';
import Reserve from './user/pages/Reserve';

import AdminPrivateRoute from './admin/components/AdminLayout';
import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';
import EmployeeRegistPage from './admin/pages/EmployeeRegistPage';
import ResourcePage from './admin/pages/ResourcePage';
import ResourceDetail from './admin/components/Resource/ResourceDetail';
import RegisterBook from './admin/pages/RegisterBook';
import EmployeeBook from './admin/pages/EmployeeBook';
import ResourceList from './admin/pages/ResourceList';
import Employee from './admin/components/Employee/Employee';

const App = () => {
  const [user, setUser] = useRecoilState(userState);
  const cookies = new Cookies();

  const accessToken = cookies.get('accessToken');

  useEffect(() => {
    if (accessToken === 'undefined') return;

    if (accessToken && isEmptyObject(user)) {
      axios
        .get(`${process.env.REACT_APP_SERVER_PORT}/mypage/user`, {
          headers: {
            Authorization: accessToken,
          },
        })
        //.then((res) => console.log(res))
        .then((res) => res.data.data[0])
        .then((data) =>
          setUser({
            userId: data.userId,
            birth: data.birth,
            deptName: data.deptName,
            email: data.email,
            empNo: data.empNo,
            gradeName: data.gradeName,
            name: data.name,
            no: data.no,
            phone: data.phone,
          }),
        );
    }
    // console.log('user = ', user);
  }, [user, setUser, accessToken]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="main" element={<Main />} />
          <Route path="mypage/changepw" element={<Reset />} />
          <Route path="mypage/user" element={<MyInfo />} />
          <Route path="search" element={<Search />} />
          <Route path="reserve" element={<Reserve />} />
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<AdminPrivateRoute />}>
          <Route path="admin/main" element={<AdminMain />} />
          <Route path="/admin/resource" element={<ResourcePage />} />
          <Route path="/admin/employee" element={<EmployeePage />} />
          <Route
            path="/admin/employee/regist"
            element={<EmployeeRegistPage />}
          />
          <Route path="/admin/resourcedetail" element={<ResourceDetail />} />
          <Route path="/admin/registerbook" element={<RegisterBook />} />
          <Route path="/admin/employeebook" element={<EmployeeBook />} />
          <Route path="/admin/resourcelist" element={<ResourceList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
