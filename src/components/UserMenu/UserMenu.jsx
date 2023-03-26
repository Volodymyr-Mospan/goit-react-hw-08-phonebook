import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { UserMenuButtonStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>
        Welcome, <b>{user.name}</b>
      </p>
      <UserMenuButtonStyled type="button" onClick={() => dispatch(logOut())}>
        Logout
      </UserMenuButtonStyled>
    </div>
  );
};
