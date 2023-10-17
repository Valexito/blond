import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registro from "../../pages/Registro";
import { ProtectedRoute } from '../_partials/Protectedroute';
import { AuthProvider } from "../../context/authContext";
import Dashboard from "../../pages/Dashboard";

export default function Navegation() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
