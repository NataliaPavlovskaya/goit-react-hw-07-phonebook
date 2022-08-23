import { useEffect } from 'react';
import { connect } from 'react-redux';

import Layout from './Layout/Layout';
import Section from './Layout/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';

function App({ contacts }) {
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      {contacts.length ? (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      ) : null}
    </Layout>
  );
}

const mapStateToProps = state => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);