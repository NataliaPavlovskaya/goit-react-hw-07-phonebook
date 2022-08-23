import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getIsAdded } from '../../redux/contacts/contacts-selectors';

export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAdded = useSelector(getIsAdded);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={e => handleSubmit(e)}>
        <label id="name" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label id="phone" htmlFor="phone">
          Number
        </label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          id="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <button type="submit" disabled={!(name && number)}>
          add contact
        </button>
      </form>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};