import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts-actions';
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";


const ContactList = () => {

  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const onDeleteBtn = id => dispatch(deleteContacts(id));

  const filteredContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = filteredContacts(contacts, filter);

  return(
  <>
  <ul className={styles.TaskList}>
  {filterContacts.map((contact) => (
    <li className = {styles.TaskList_item}key={contact.id}>
      {contact.name + ":" + contact.number}
      {
        <button
          className={styles.TaskList_button}
          type="button"
          name="delete"
          onClick={e => onDeleteBtn(contact.id)}
        >
          Delete
        </button>
      }
    </li>
  ))}
  </ul></>)
 
};

ContactList.propTypes = {
  onDeleteBtn: PropTypes.func,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ContactList;