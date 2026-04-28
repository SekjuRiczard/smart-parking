import { Login } from '../features/auth/components/Login/Login';
import { ParkingSummary } from '../features/parking/components/ParkingSummary/ParkingSummary';
import { useState } from 'react';
import { Register } from '../features/auth/components/Register/Register';
export const LoginPage = () => {
  const [view, setView] = useState('login');

  return (
    <div className="app-container">
      {view === 'login' ? (
        <Login onSwitchToRegister={() => setView('register')} />
      ) : (
        <Register onSwitchToLogin={() => setView('login')} />
      )}
      <ParkingSummary />
    </div>
  );
};
