import { useState } from "react";
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
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

  const classes = useStyles();

  return (
    <>
    <h1>Registration</h1>
    <form className={classes.root} onSubmit={handleSubmit}>
      <p className={classes.name}>Name</p>
      <TextField
        variant="outlined"
        type="text"
        name="name"
        value={name}
        autoFocus
        label="Enter your name"
        className={classes.input}
        onChange={handleChange}
      />
      <p className={classes.name}>Email</p>
      <TextField
        variant="outlined"
        type="email"
        name="email"
        value={email}
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
      <Button
          variant="contained"
          className={classes.button}
          type="submit">
          Register
      </Button>
    </form>
    </>
  )
}