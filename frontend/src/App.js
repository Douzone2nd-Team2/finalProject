import { Routes, Route } from 'react-router-dom';

import LoginPage from './user/pages/LoginPage';
import MainPage from './user/pages/MainPage';
import AdminMain from './admin/pages/AdminMain';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/admin" element={<AdminMain />} />
      </Routes>
    </>
  );
};

export default App;
