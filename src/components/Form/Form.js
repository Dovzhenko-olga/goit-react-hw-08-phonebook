import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {contactOperations, contactSelectors } from 'redux/contacts';
import styles from './Form.module.css';


function Form({onShowModal}) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();

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
      // alert(`${name} already in contacts. Rewrite number?`);
      reset();
      return;
      }
    dispatch(contactOperations.addContact({name, number}));
    reset();
  };

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

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
      <button className={styles.button} type="submit">Add contact</button>
    </form>
    )
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: contact => dispatch(addContact(contact)),
// })
 
export default Form;