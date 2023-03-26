import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  /* padding: 40px; */
  /* border-bottom: 1px solid black; */

  button {
    width: 150px;
    margin-top: 20px;
    padding: 10px 25px;
    /* border-radius: 10px; */
    cursor: pointer;
  }
`;

export const NavigationLink = styled(NavLink)`
  /* width: 150px; */
  margin-top: 20px;
  padding: 10px 25px;

  color: black;

  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  &.active {
    font-weight: bold;
    /* color: ; */
  }
`;
