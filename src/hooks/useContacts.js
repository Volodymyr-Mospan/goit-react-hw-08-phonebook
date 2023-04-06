import { useSelector } from 'react-redux';
import {
  selectLoadingContacts,
  selectAllContacts,
  selectContactsError,
  selectFilteredContacts,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoadingContacts = useSelector(selectLoadingContacts);
  const allContacts = useSelector(selectAllContacts);
  const contactsError = useSelector(selectContactsError);
  const visibleContacts = useSelector(selectFilteredContacts);

  return {
    isLoadingContacts,
    allContacts,
    contactsError,
    visibleContacts,
  };
};
