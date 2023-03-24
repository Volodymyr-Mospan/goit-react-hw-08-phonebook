import React from 'react';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { StyledApp } from 'components/App.styled';

import { useGetContactsQuery } from 'redux/contactSlice';

export const App = () => {
  const { data, error, isFetching } = useGetContactsQuery();

  return (
    <StyledApp>
      <div className={'container'}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div className={'container'}>
        <h2>Contacts</h2>
        <Filter />
        {isFetching && !error ? <b>Request in progress...</b> : <p>&nbsp;</p>}
        {!isFetching && error && <b>{error}</b>}
        {!!data && <ContactList />}
      </div>
    </StyledApp>
  );
};
