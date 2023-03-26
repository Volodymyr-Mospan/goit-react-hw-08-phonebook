import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuButtonStyled, UserMenuStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <b>{user.email}</b>

      <UserMenuButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButtonStyled>
    </UserMenuStyled>
  );
};
