import MainPage from './user/pages/MainPage';
import LoginPage from './user/pages/LoginPage';
import AdminMain from './admin/pages/AdminMain';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/admin" element={<AdminMain />} />
      </Routes>
    </>
  );
}

export default App;
