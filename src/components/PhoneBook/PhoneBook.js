import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactSelectors, contactOperations } from 'redux/contacts';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import Loader from 'components/Loader';
import styles from './PhoneBook.module.css';

const useStyles = makeStyles(() => ({
  button: {
    padding: "0 7px 0 7px",
    fontSize: "1.2rem",
    fontWeight: 600,
    backgroundColor: "rgb(216, 100, 100)",
    color: "bisque",
    borderRadius: "3px",
    border: "none",
    outline: "none",
    boxShadow: "inset 0px 0px 6px 2px grey",
    cursor: "pointer",
    textTransform: "capitalize",
    "@media screen and (max-width: 480px)": {
      minWidth: "30px",
      padding: "5px",
      borderRadius: "50%",
    },
    "& span": {
      "@media screen and (max-width: 480px)": {
        marginLeft: "1px",
        marginRight: "1px",
    },
    },
    "&:hover": {
      backgroundColor: "rgb(240, 100, 100)",
      boxShadow: "inset 0px 0px 6px 2px grey",
    },
  }
}));

const PhoneBook = () => {

  const isLoading = useSelector(contactSelectors.getIsLoading);
  const contacts = useSelector(contactSelectors.filteredContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onDeleteContact = contactId => {
    dispatch(contactOperations.deleteContact(contactId))
  };

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
         <h2>Loading...</h2>
         <Loader />
        </div>
        )
      }
    {contacts.length > 0 && (
      <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <span>{name}:</span> <span className={styles.number}>{number}</span>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<Delete />}
            onClick={() => { onDeleteContact(id) }}
        >
        <span className={styles.hidden}>Delete</span>
        </Button>
          {/* <button className={styles.button} onClick={() => { onDeleteContact(id) }}>Delete</button> */}
        </li>
      ))}
        </ul>
    )}
    </>
    )
};

export default PhoneBook;