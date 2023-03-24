import { HeaderStyled } from './Header.styled';

export const Header = ({ onClick }) => {
  return (
    <HeaderStyled>
      <h1>Contacts book</h1>
      <button onClick={onClick}>LogIn</button>
    </HeaderStyled>
  );
};
