import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';
import { useDeleteContactMutation } from 'redux/contactSlice';

export const Contact = ({ contact }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = () => {
    deleteContact(contact.id);
  };

  return (
    <>
      {`${contact.name}: ${contact.phone}`}
      <ContactBtn type="button" onClick={handleDelete}>
        {isLoading ? 'Deleting...' : 'Delete'}
      </ContactBtn>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
