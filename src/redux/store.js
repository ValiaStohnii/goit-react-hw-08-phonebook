import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactReducer } from './slice/usersSlice';
import { contactsApi } from './slice/contactsSlice';
import { filterReducer } from './slice/filterSlice';
import authSlice from './slice/authSlice';
import { usersApi } from './slice/usersApiSlice';

export const store = configureStore({
  reducer: {
    authUser: authSlice,
    contacts: contactReducer,
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
