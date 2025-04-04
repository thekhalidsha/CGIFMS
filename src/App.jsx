import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './features/themeSlice';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/Home';
import PublicLayout from './layouts/PublicLayout';
import { useEffect, useState } from 'react';
import LoginPage from './pages/LoginPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './layouts/ProtectedRoute';
import Dashboard from './pages/protected/Dashboard';
import Logout from './pages/protected/Logout';

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const toggleThemeHandler = () => {
    dispatch(toggleTheme());
  };
  useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.altKey && event.key == "s") {
        event.preventDefault();
        dispatch(toggleTheme());
      }
    });
  }, []);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main className={`${theme.theme} min-h-screen`}>
      <title>CGI IFMS | Home</title>
      <ToastContainer />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage/>} />
        </Route>
        <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </main >
  );
}

export default App;
