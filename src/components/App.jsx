import React from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { StyledApp } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { LogInModal } from './ModalWindow/ModalWindow';

export const App = () => {
  const { data, error, isFetching } = useGetContactsQuery();
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <StyledApp>
      <LogInModal modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <Header onClick={openModal} />
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
