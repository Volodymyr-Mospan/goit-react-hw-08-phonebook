import React from 'react';
import { Contact } from 'components/Contacts/';
import { ContactListStyled, ContactStyled } from 'components/Contacts/';
import { useContacts } from 'hooks';

export const ContactList = () => {
  const { visibleContacts } = useContacts();

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <ContactStyled key={contact.id}>
          <Contact contact={contact} />
        </ContactStyled>
      ))}
    </ContactListStyled>
  );
};
