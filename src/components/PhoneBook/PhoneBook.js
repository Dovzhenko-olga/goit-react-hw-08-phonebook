import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './PhoneBook.module.css';
import { contactSelectors, contactOperations } from 'redux/contacts';

const PhoneBook = () => {

  const isLoading = useSelector(contactSelectors.getIsLoading);
  const contacts = useSelector(contactSelectors.filteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(contactOperations.deleteContact(contactId))
  };

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

  return (
    <>
    {isLoading && <h2>Loading...</h2>}
    {contacts.length > 0 && (
      <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <span>{name}:</span> <span className={styles.number}>{number}</span>
          <button className={styles.button} onClick={() => { onDeleteContact(id) }}>Delete</button>
        </li>
      ))}
        </ul>
    )}
    </>
    )
};

export default PhoneBook;