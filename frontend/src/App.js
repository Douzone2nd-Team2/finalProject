import AdminMain from "./admin/pages/AdminMain";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<AdminMain />} />
      </Routes>
    </>
  );
}

export default App;
