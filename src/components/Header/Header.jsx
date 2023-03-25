import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';

export const Header = ({ onClick }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <HeaderStyled>
        <h1>Contact book</h1>
        <button onClick={openModal}>LogIn</button>
        <NavLink to="contacts">Contacts</NavLink>
        {/* <NavLink to="modal-window">LogIn</NavLink> */}
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};
