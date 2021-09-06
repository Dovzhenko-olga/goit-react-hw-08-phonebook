import { useState } from 'react';
import Section from '../Section';
import Form from '../Form';
import PhoneBook from '../PhoneBook';
import Filter from '../Filter';
import Modal from '../Modal';
import styles from 'App.module.css';

export default function ContactsView() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }

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