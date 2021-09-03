import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './Auth.module.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    reset();
  };

  return (
    <>
    <h2>LogIn</h2>
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <p className={styles.name}>Email</p>
        <input
          type="text"
          name="email"
          className={styles.input}
          value={email}
          placeholder="Enter email"
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={styles.name}>Password</p>
        <input
          type="password"
          name="password"
          className={styles.input}
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">Entered</button>
    </form>
    </>
  )
}