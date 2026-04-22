import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOpen, PermIdentity, Password, Badge, Send } from '@mui/icons-material';
import { registerUser } from '../../api/authService';

function Register() {
  const [form, setForm] = useState({ login: '', name: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) return alert('Passwords do not match!');

    const { confirmPassword, ...registerData } = form;
    const res = await registerUser(registerData);
    if (res?.success) navigate('/');
  }

  const iconSx = { marginRight: '10px', width: 45, height: 45 };

  return (
    <div className="registerContainer">
      <h2 className="registerHeader">Register</h2>
      <div className="registerContent">
        <div className="registerLeft">
          <form className="registerForm" onSubmit={handleSubmit}>
            <h1 style={{ fontFamily: 'sans-serif' }}>Create an Account</h1>
            <LockOpen sx={{ width: 90, height: 90, color: 'purple' }} />
            <ul>
              <li>
                <p>
                  <PermIdentity sx={iconSx} />
                  <input type="text" name="login" placeholder="Username" value={form.login} onChange={handleChange} />
                </p>
              </li>
              <li>
                <p>
                  <Badge sx={iconSx} />
                  <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                </p>
              </li>
              <li>
                <p>
                  <Password sx={iconSx} />
                  <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                </p>
              </li>
              <li>
                <p>
                  <Password sx={iconSx} />
                  <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
                </p>
              </li>
              <li>
                <button className="registerSubmitButton" type="submit">
                  <p>Register</p><Send />
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;