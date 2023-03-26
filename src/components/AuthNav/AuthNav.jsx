import { AuthNavStyled, NavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavStyled>
      <NavigationLink to="/register">Register</NavigationLink>
      <NavigationLink to="/login">Log In</NavigationLink>
    </AuthNavStyled>
  );
};
