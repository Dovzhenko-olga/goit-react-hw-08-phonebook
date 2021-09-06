import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './Auth.module.css';

const useStyles = makeStyles(() => ({
  button: {
    width: "130px",
    padding: "3px",
    fontSize: "1.4rem",
    fontWeight: 500,
    backgroundColor: "rgb(216, 100, 100)",
    color: "bisque",
    borderRadius: "3px",
    border: "none",
    outline: "none",
    boxShadow: "inset 0px 0px 6px 2px grey",
    cursor: "pointer",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "rgb(240, 100, 100)",
      boxShadow: "inset 0px 0px 6px 2px grey",
    },
  }
}));

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

  const classes = useStyles();

  return (
    <>
    <h1>LogIn</h1>
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
        <Button
          variant="contained"
          className={classes.button}
          type="submit">
          Entered
        </Button>
    </form>
    </>
  )
}