import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectLoadingContacts = state => state.contacts.isLoading;

export const selectAllContacts = state => state.contacts.items;

export const selectContactsError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(normalizedFilter) ||
          contact.number.toLowerCase().includes(normalizedFilter)
      )
      .reverse();
  }
);
