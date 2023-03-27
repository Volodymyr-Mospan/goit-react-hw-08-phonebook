import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';
import { useContacts } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';

export const Contact = ({ contact }) => {
  const [deleting, setDeleting] = useState(false);
  const { isLoadingContacts } = useContacts();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    setDeleting(true);
  };

  return (
    <>
      {`${contact.name}: ${contact.number}`}
      <ContactBtn type="button" onClick={handleDelete}>
        {isLoadingContacts && deleting ? 'Deleting...' : 'Delete'}
      </ContactBtn>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
