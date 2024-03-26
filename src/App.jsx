import "./App.css";
import "./styles/_flex.scss";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";

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
import ReadBook from "./pages/ReadBook";
import { ToastContainer, toast } from "react-toastify";
import { AuthProvider } from "./AuthProvider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="" index element={<HomePage />} />
            <Route path="book/:bookId" element={<BookDetail />} />
            <Route path="editProfile" element={<EditProfile />} />
            <Route path="changePassword" element={<ChangePassword />} />
            <Route path="history" element={<PaymentHisPage />} />
          </Route>
          <Route path="updatePassword" element={<UpdatePass />} />
          <Route path="forgotPassword" element={<ForgotPass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/read" element={<ReadBook />} />
        </Routes>
        <ToastContainer autoClose={5000} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
