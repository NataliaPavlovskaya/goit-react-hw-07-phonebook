import { combineReducers, createReducer } from '@reduxjs/toolkit';
import defaultContacts from '../contacts';
import { changeFilter, addContacts, deleteContacts } from './contacts-actions';

const contactsReducer = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts,
  {
    [addContacts]: (state, { payload }) => [...state, payload],
    [deleteContacts]: (state, { payload }) =>
      state.filter(contact => {
        return contact.id !== payload;
      }),
  },
);

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});