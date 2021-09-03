import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactOperations } from 'redux/contacts';
import Section from '../Section';
import Form from '../Form';
import PhoneBook from '../PhoneBook';
import Filter from '../Filter';
import Modal from '../Modal';
import styles from 'App.module.css';

export default function ContactsView() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);

  return (
    <>
    {showModal && <Modal onClose={toggleModal}>
          <h1>Hello!</h1>
          <p>This name already in contacts. Rewrite number?</p>
          <button className={styles.modalButton} type="button" onClick={toggleModal}>Close</button>
        </Modal>}
        <Section title="Phonebook">
        <Form onShowModal={toggleModal}/>
        </Section>
        <Section title="Contacts">
          <Filter />
          <PhoneBook />
        </Section>
  </>
  )
}