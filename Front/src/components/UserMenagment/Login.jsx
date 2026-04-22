import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Password, LockOpen, Send, PermIdentity } from '@mui/icons-material';
import { loginUser, slotState } from '../../api/authService';

function Login() {
  const [form, setForm] = useState({ login: '', password: '' });
  const [status, setStatus] = useState('');
  const [slots, setSlots] = useState({ freeSlots: 0, busySlots: 0 });
  const navigate = useNavigate();

  useEffect(function() {
    slotState().then(data => data && setSlots(data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await loginUser(form);
    
    if (res.success) {
      setStatus('Zalogowano pomyślnie!');
      setTimeout(() => navigate('/'), 500);
    } else {
      setStatus(res.status === 403 ? 'Nieprawidłowy login lub hasło.' : 'Wystąpił błąd');
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const iconSx = { marginRight: '10px', width: '45px', height: '45px' };

  return (
    <div className="login">
      <h2 className="loginHeader">Log in</h2>
      <div className="loginContent">
        <div className="left">
          <form className="loginForm" onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: 'sans-serif' }}>
              Welcome back <LockOpen sx={{ width: 90, height: 90, color: 'green' }} />
            </h1>
            <ul>
              <li>
                <p>
                  <PermIdentity sx={iconSx} />
                  <input type="text" name="login" placeholder="Username" onChange={handleChange} />
                </p>
              </li>
              <li>
                <p>
                  <Password sx={iconSx} />
                  <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                </p>
              </li>
              <li>
                <p style={{ color: status.includes('Zalogowano') ? 'green' : 'red' }}>{status}</p>
                <button className="loginSubmitButton" type="submit">
                  <p>Log in</p> <Send />
                </button>
                <Link to="/register" className="registerButton">
                  Dont have an account? Click here.
                </Link>
              </li>
            </ul>
          </form>
        </div>
        <div className="parkingStatus">
          <div className="parkingChart">
            <h3>Stan miejsc parkingowych</h3>
            <p className="freeSlots">Wolne miejsca: {slots.freeSlots}</p>
            <p className="busySlots">Zajęte miejsca: {slots.busySlots}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;