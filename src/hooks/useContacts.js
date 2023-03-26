import { useSelector } from 'react-redux';
import {
  selectLoadingContacts,
  selectAllContacts,
  selectContactsError,
} from 'redux/contacts/selectors';

export const useContacts = () => {
  const isLoadingContacts = useSelector(selectLoadingContacts);
  const allContacts = useSelector(selectAllContacts);
  const contactsError = useSelector(selectContactsError);

  return {
    isLoadingContacts,
    allContacts,
    contactsError,
  };
};
