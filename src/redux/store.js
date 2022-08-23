import { configureStore} from '@reduxjs/toolkit';
import rootReducer from './contacts/contacts-reducer';
import logger from 'redux-logger';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;