import React from 'react';
// import { StyledApp } from 'components/App.styled';
import { Header } from 'components/Header/Header';
import { ContactsPage } from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    // <StyledApp>
    //   <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} />

    //   <Header onClick={openModal} />
    //   <ContactsPage />
    //   {/* <div className={'container'}>
    //     <h1>Phonebook</h1>
    //     <ContactForm />
    //   </div>
    //   <div className={'container'}>
    //     <h2>Contacts</h2>
    //     <Filter />
    //     {isFetching && !error ? <b>Request in progress...</b> : <p>&nbsp;</p>}
    //     {!isFetching && error && <b>{error}</b>}
    //     {!!data && <ContactList />}
    //   </div> */}
    // </StyledApp>

    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<ContactsPage />}></Route>
        {/* <Route
          path="modal-window"
          element={
            <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} />
          }
        /> */}
      </Route>
    </Routes>
  );
};
