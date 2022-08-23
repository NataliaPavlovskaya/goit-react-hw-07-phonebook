import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const deleteContacts = createAction('contacts/delete');
export const changeFilter = createAction('contacts/changeFilter');
export const addContacts = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuid(),
    name,
    number,
  },
}));