import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { useContacts } from 'hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { allContacts, contactsError, isLoadingContacts } = useContacts();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className={'container'}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={'container'}>
        <h2>Contacts</h2>
        <Filter />
        {isLoadingContacts && !contactsError ? (
          <b>Request in progress...</b>
        ) : (
          <p>&nbsp;</p>
        )}
        {!isLoadingContacts && contactsError && <b>{contactsError}</b>}
        {!!allContacts && <ContactList />}
      </div>
      <Outlet />
    </>
  );
};
