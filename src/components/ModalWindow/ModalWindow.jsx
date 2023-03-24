import Modal from 'react-modal';
import { Authorization } from 'components/Authorization/Authorization';
import { Registration } from 'components/Registration/Registration';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const LogInModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <h2>Hello</h2>
      <Authorization />
      <Registration />
    </Modal>
  );
};
