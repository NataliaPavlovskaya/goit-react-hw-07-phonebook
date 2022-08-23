import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { addContacts } from '../../redux/contacts-actions';



export default function ContactForm() {
const [name, setName] = useState('');
const [number, setNumber] = useState('');
const { contacts } = useSelector(state => state);
const dispatch = useDispatch();

const onAddContacts = (name, number) => dispatch(addContacts(name, number));

  const handleSubmit = (e) => {
    e.preventDefault();
    const isAdded = name =>
      contacts.map(contact => contact.name).includes(name);

    if (isAdded(name)) {
      return alert(`${name} is already in contacts`);
    } else {
      onAddContacts(name, number);
    }

    setName('');
    setNumber('');

    // const handleChange =(e) => {
//   const {name, value} = e.target;

//   switch (name){
//     case 'name':
//       setName(value);
//       break;
//     case 'number':
//       setNumber(value);
//       break;

//     default: return;
//   } 
  
// }
    // if (!name || !number) {
    //   alert('Вы не ввели все контактные данные');
    //   return;
    // }

    // if (Number.isNaN(+number)) {
    //   alert('Телефонный номер должен содержать только цифры');
    //   return;
    // }

    // onAddContacts(name, number);
  };
    return (
      <form className={styles.TaskEditor} onSubmit={handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
        </label>
        <button className={styles.TaskEditor_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};