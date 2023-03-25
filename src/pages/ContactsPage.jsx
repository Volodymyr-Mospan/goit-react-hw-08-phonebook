import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { Outlet } from 'react-router-dom';
import { useGetContactsQuery } from 'redux/contacts/slice';

export const ContactsPage = () => {
  const { data, error, isFetching } = useGetContactsQuery();

  return (
    <>
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
      <Outlet />
    </>
  );
};
