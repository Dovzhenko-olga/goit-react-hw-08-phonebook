import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from './Auth.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  }

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    reset();
  };

  return (
    <>
    <h2>Registration</h2>
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <p className={styles.name}>Name</p>
        <input
          type="text"
          name="name"
          className={styles.input}
          value={name}
          placeholder="Enter name"
          onChange={handleChange}
        />
      </label>
      <label>
        <p className={styles.name}>Email</p>
        <input
          type="email"
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
      <button className={styles.button} type="submit">Register</button>
    </form>
    </>
  )
}