import { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import { DashboardPage } from './pages/DashboardPage/DashboardPage';
import { Navigation } from './components/Layout/Navigation/Navigation';
import { BusySlotsPage } from './pages/BusySlotsPage';
import { FreeSlotsPage } from './pages/FreeSlotsPage';
import { InformationsPage } from './pages/InformationsPage';
import { AuthPage } from './pages/Auth/AuthPage';
import { UsersList } from './features/users/components/UsersList/UsersList';
import { PrivateRoute } from './components/Layout/PrivateRoute';
import './styles/main.scss';
import { UserDashboardPage } from './pages/UserDashboard/UserDashboardPage';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          if (payload.exp * 1000 < Date.now()) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('login');
            navigate('/auth');
          }
        } catch (e) {
          console.error('jwt error', e.getMessage());
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  const isAuthPage = ['/auth'].includes(pathname);

  return (
    <div className="app-container">
      {!isAuthPage && <Navigation />}
      <div className="content-container">
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/freeSlots" element={<FreeSlotsPage />} />
            <Route path="/busySlots" element={<BusySlotsPage />} />
            <Route path="/informations" element={<InformationsPage />} />
            <Route path="/userPanel" element={<UserDashboardPage />} />
            <Route path="/usersList" element={<UsersList />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
