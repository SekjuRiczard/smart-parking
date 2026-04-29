import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOpen, Person, Key, Badge, Send } from '@mui/icons-material';
import { registerUser } from '../../api/authService';
import styles from './Register.module.scss';

export const RegisterForm = ({ onSwitch }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    login: '',
    name: '',
    password: '',
    confirmPassword: '',
  });
  const [status, setStatus] = useState({ msg: '', isError: false });

  const { login, name, password, confirmPassword } = form;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login || !name || !password || !confirmPassword) {
      setStatus({ msg: 'Please fill all fields.', isError: true });
      return;
    }

    if (password !== confirmPassword) {
      setStatus({ msg: 'Passwords do not match!', isError: true });
      return;
    }

    const { confirmPassword: _, ...registerData } = form;
    const res = await registerUser(registerData);

    if (res?.success) {
      setStatus({ msg: 'Account created successfully!', isError: false });
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      setStatus({ msg: 'Registration failed. Try again.', isError: true });
    }
  };

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <LockOpen />
        <h1>Create Account</h1>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <Person />
          <input
            type="text"
            name="login"
            placeholder="Username"
            value={login}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Badge />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Key />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Key />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
          />
        </div>

        {status.msg && (
          <p className={status.isError ? styles.error : styles.success}>
            {status.msg}
          </p>
        )}

        <button type="submit" className={styles.submitBtn}>
          Register <Send fontSize="small" />
        </button>
      </form>

      <footer className={styles.footer}>
        <button type="button" onClick={onSwitch}>
          Already have an account? <span>Click here</span>
        </button>
      </footer>
    </article>
  );
};
