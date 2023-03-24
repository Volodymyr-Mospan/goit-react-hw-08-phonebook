import React from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import Modal from 'react-modal';
import { ContactForm, ContactList, Filter } from 'components/Contacts/';
import { StyledApp } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { Authorization } from './Authorization/Authorization';
import { Registration } from './Registration/Registration';

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

export const App = () => {
  const { data, error, isFetching } = useGetContactsQuery();
  const [modalIsOpen, setIsOpen] = React.useState(true);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <StyledApp>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
        <Authorization />
        <Registration />
      </Modal>{' '}
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
