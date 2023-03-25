import Modal from 'react-modal';
import { Authorization } from 'components/Authorization/Authorization';
import { Registration } from 'components/Registration/Registration';
import { useState } from 'react';

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

export const ModalWindow = ({ modalIsOpen, closeModal }) => {
  const [isViewAuth, setIsViewAuth] = useState(true);

  const handleClick = () => {
    setIsViewAuth(prevIsViewAuth => !prevIsViewAuth);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <h2>Hello</h2>
      <button onClick={handleClick} disabled={isViewAuth}>
        Authorization
      </button>
      <button onClick={handleClick} disabled={!isViewAuth}>
        Registration
      </button>

      {isViewAuth ? (
        <Authorization closeModal={closeModal} />
      ) : (
        <Registration closeModal={closeModal} />
      )}
    </Modal>
  );
};
