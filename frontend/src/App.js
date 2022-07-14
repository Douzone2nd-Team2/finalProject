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
import Book from './user/pages/main/Book';

import AdminPrivateRoute from './admin/components/AdminLayout';
import AdminMain from './admin/pages/AdminMain';
import AdminLoginPage from './admin/pages/AdminLoginPage';
import EmployeePage from './admin/pages/EmployeePage';
import EmployeeRegistPage from './admin/pages/EmployeeRegistPage';
import ResourcePage from './admin/pages/ResourcePage';
import ResourceUpdate from './admin/pages/ResourceUpdate';
import ResourceBook from './admin/pages/ResourceBook';
import RegisterBook from './admin/pages/RegisterBook';
import EmployeeBook from './admin/pages/EmployeeBook';
import ResourceList from './admin/pages/ResourceList';
import UserBook from './admin/pages/UserBook';
import UserBookhandle from './admin/pages/UserBookhandle';
import Employee from './admin/components/Employee/Employee';
import MyReservation from './user/pages/MyReservation';
import ResourceBookhandle from './admin/pages/ResourceBookhandle';

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
            imageUrl: data.imageUrl,
          }),
        );
    }
  }, [user, setUser, accessToken]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="main" element={<Main />} />
          <Route path="mypage/changepw" element={<Reset />} />
          <Route path="mypage/user" element={<MyInfo />} />
          <Route path="mypage/reservation" element={<MyReservation />} />
          <Route path="search" element={<Search />} />
          <Route path="mypage/mybook" element={<Book />} />
          <Route path="reserve" element={<Reserve />} />
        </Route>
        <Route path="admin/login" element={<AdminLoginPage />} />
        <Route element={<AdminPrivateRoute />}>
          <Route path="admin/main" element={<AdminMain />} />
          <Route path="admin/resource" element={<ResourcePage />} />
          <Route path="admin/employee" element={<EmployeePage />} />
          <Route path="admin/resourceupdate" element={<ResourceUpdate />} />
          <Route
            path="/admin/employee/regist"
            element={<EmployeeRegistPage />}
          />
          <Route path="admin/registerbook" element={<RegisterBook />} />
          <Route path="admin/resourcelist" element={<ResourceList />} />
          <Route path="admin/resourcebook" element={<ResourceBook />} />
          <Route
            path="admin/resourcebookhandle"
            element={<ResourceBookhandle />}
          />
          <Route path="admin/employeebook" element={<EmployeeBook />} />
          <Route path="admin/userbook" element={<UserBook />} />
          <Route path="admin/userbookhandle" element={<UserBookhandle />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
