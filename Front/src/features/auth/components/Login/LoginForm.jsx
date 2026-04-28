import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOpen, Person, Key, ArrowForward } from '@mui/icons-material';
import { loginUser } from '../../api/authService';
import styles from './Login.module.scss'; // Osobny plik dla loginu

export const LoginForm = ({ onSwitch }) => {
  const [form, setForm] = useState({ login: '', password: '' });
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await loginUser(form);

    if (res.success) {
      setStatus('Zalogowano pomyślnie!');
      setTimeout(() => navigate('/dashboard'), 500);
    } else {
      setStatus(
        res.status === 403 ? 'Nieprawidłowy login lub hasło.' : 'Wystąpił błąd'
      );
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <LockOpen />
        <h1>Welcome back</h1>
      </header>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <Person />
          <input
            type="text"
            name="login"
            placeholder="Username"
            value={form.login}
            onChange={handleChange}
          />
        </div>

        <div className={styles.inputWrapper}>
          <Key />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {status && (
          <p
            className={
              status.includes('pomyślnie') ? styles.success : styles.error
            }
          >
            {status}
          </p>
        )}

        <button type="submit" className={styles.submitBtn}>
          Log in <ArrowForward fontSize="small" />
        </button>
      </form>

      <footer className={styles.footer}>
        <button type="button" onClick={onSwitch}>
          Dont have an account? <span>Click here</span>
        </button>
      </footer>
    </article>
  );
};
