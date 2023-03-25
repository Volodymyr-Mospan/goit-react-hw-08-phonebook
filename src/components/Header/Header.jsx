import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/options';

export const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handsleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <>
      <HeaderStyled>
        <h1>Contact book</h1>
        <nav>
          <NavLink to="/">Started Page</NavLink>
          <p>--------------</p>
          {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
        </nav>

        {isLoggedIn ? (
          <button onClick={handsleLogOut}>LogOut</button>
        ) : (
          <button onClick={openModal}>LogIn</button>
        )}
      </HeaderStyled>
      <main>
        <Outlet />
      </main>
      <ModalWindow modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};
