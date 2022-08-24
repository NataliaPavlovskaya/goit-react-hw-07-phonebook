import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactList.module.css';

export default function ContactsList() {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, phone }) => (
          <li key={id}>
            <p className={styles.nameText}>
              {name}: <span>{phone}</span>
            </p>
            <button type="button" onClick={() => dispatch(deleteContacts(id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
