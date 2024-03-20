import "./App.css";
import "./styles/_flex.scss";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import BookDetail from "./pages/BookDetail";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import PaymentHisPage from "./pages/PaymentHisPage";
import UpdatePass from "./pages/UpdatePass";
import ForgotPass from "./pages/ForgotPass";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="" index element={<HomePage />} />
          <Route path="book/:bookId" element={<BookDetail />} />
          <Route path="editProfile" element={<EditProfile />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="history" element={<PaymentHisPage />} />
          <Route path="updatePassword" element={<UpdatePass />} />
          <Route path="forgotPassword" element={<ForgotPass />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
