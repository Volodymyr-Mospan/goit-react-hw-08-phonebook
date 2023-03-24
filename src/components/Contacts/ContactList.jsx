import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useGetContactsQuery } from 'redux/contactSlice';
import { Contact } from 'components/Contacts/';
import { ContactListStyled, ContactStyled } from 'components/Contacts/';

export const ContactList = () => {
  const { data } = useGetContactsQuery();

  const filter = useSelector(selectFilter);

  const getFilteredContacts = (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.phone.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts(data, filter);

  return (
    <ContactListStyled>
      {visibleContacts
        .map(contact => (
          <ContactStyled key={contact.id}>
            <Contact contact={contact} />
          </ContactStyled>
        ))
        .reverse()}
    </ContactListStyled>
  );
};
