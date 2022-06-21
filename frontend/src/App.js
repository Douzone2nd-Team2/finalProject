import { Routes, Route } from 'react-router-dom';

import Layout from './user/components/Layout';

import LoginPage from './user/pages/LoginPage';
import MainPage from './user/pages/main';
import ResetPage from './user/pages/ResetPage';
import AdminMain from './admin/pages/AdminMain';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<Layout />}>
          <Route path="main" element={<MainPage />} />
          <Route path="reset" element={<ResetPage />} />
        </Route>
        <Route path="admin" element={<AdminMain />} />
      </Routes>
    </>
  );
};

export default App;
