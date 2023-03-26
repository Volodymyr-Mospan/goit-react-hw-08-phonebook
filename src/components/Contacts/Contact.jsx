import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';
import { useContacts } from 'hooks';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact }) => {
  const { isLoadingContacts } = useContacts();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <>
      {`${contact.name}: ${contact.number}`}
      <ContactBtn type="button" onClick={handleDelete}>
        {isLoadingContacts ? 'Deleting...' : 'Delete'}
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
