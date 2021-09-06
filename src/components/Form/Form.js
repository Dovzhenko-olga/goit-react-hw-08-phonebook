import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { contactOperations, contactSelectors } from 'redux/contacts';
import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import styles from './Form.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  button: {
    margin: 0,
    width: "36px",
    height: "36px",
    color: "#ffe4c4",
    backgroundColor: "rgb(216, 100, 100)",
    boxShadow: "inset 0px 0px 6px 2px grey",
    "&:hover": {
      backgroundColor: "rgb(240, 100, 100)",
      boxShadow: "inset 0px 0px 6px 2px grey",
    },
  },
}));


function Form({onShowModal}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
       onShowModal(name);
      reset();
      return;
      }
    dispatch(contactOperations.addContact({name, number}));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <p className={styles.name}>Name</p>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className={styles.input}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
        </label>
        <label>
          <p className={styles.name}>Number</p>
          <input
            type="tel"
            name="number"
            placeholder="Enter number"
            value={number}
            className={styles.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={handleChange}
          />
      </label>
      <div className={styles.addedBlock}>
        <p className={styles.added}>Add contact</p>
        <div className={classes.root}>
          <Fab className={classes.button} aria-label="add">
            <Add />
          </Fab>
        </div>
      </div>
      {/* <button className={styles.button} type="submit">Add contact</button> */}
    </form>
    )
}

export default Form;