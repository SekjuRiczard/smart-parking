import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './components/Main/Dashboard/Dashboard';
import Navigation from './components/Navigation/Navigation';
import BusySlots from './components/SlotsStatus/BusySlots';
import FreeSlots from './components/SlotsStatus/FreeSlots';
import Informations from './components/SlotsStatus/Informations';
import UserPanel from './components/UserMenagment/UserPanel';
import Login from './components/UserMenagment/Login';
import Register from './components/UserMenagment/Register';
import UsersList from './components/UserMenagment/UsersList';
import PrivateRoute from './components/Navigation/PrivateRoute';
import './index.css';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('accessToken');
      if (token && JSON.parse(atob(token.split('.')[1])).exp * 1000 < Date.now()) {
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [navigate]);

  const isAuthPage = ['/login', '/register'].includes(pathname);

  return (
    <div className="AppContainer">
      {!isAuthPage && <Navigation />}
      <div className="ContentContainer">
        <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/busySlots" element={<PrivateRoute><BusySlots /></PrivateRoute>} />
          <Route path="/freeSlots" element={<PrivateRoute><FreeSlots /></PrivateRoute>} />
          <Route path="/informations" element={<PrivateRoute><Informations /></PrivateRoute>} />
          <Route path="/userPanel" element={<PrivateRoute><UserPanel /></PrivateRoute>} />
          <Route path="/usersList" element={<PrivateRoute><UsersList /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;