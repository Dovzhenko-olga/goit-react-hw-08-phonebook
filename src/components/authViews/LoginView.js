import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    fontSize: "1.4rem",
  },
    name: {
    marginTop: 0,
    marginBottom: "5px",
    fontSize: "25px",
    fontWeight: 500,
  },
  input: {
    marginBottom: "10px",
    padding: "3px",
    width: "300px",
    borderRadius: "4px",
    border: "none",
    outline: "none",
    backgroundColor: "#fff",
    boxShadow: "inset -1px 0px 10px 2px grey",
  },
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
      <form className={classes.root} onSubmit={handleSubmit}>
      <p className={classes.name}>Email</p>
      <TextField
        variant="outlined"
        type="email"
        name="email"
        value={email}
        autoFocus
        label="Enter your email"
        className={classes.input}
        onChange={handleChange}
      />
      <p className={classes.name}>Password</p>
      <TextField
        variant="outlined"
        type="password"
        name="password"
        value={password}
        label="Enter your password"
        className={classes.input}
        onChange={handleChange}
      />
        {/* <input
          type="password"
          name="password"
          className={styles.input}
          value={password}
          placeholder="Enter your password"
          onChange={handleChange}
        /> */}
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