// import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import RegisterView from 'components/authViews/RegisterView';
import LoginForm from './components/authViews/LoginView';
import ContactsView from './components/ContactsView';


export default function App() {

  return (
    <Container>
      <AppBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginForm} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
        {/* {showModal && <Modal onClose={toggleModal}>
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
        </Section> */}
      </Container>
    );
}

