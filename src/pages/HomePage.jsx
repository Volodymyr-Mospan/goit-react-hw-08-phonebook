import { NavLink } from 'react-router-dom';

export const Home = () => {
  const styles = {
    container: {
      paddingTop: '100px',
      minHeight: 'calc(100vh - 50px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // justifyContent: 'center',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    },
  };
  return (
    <div style={styles.container}>
      <h2>Welcome to the Contact Book</h2>
      <p>
        Please,{' '}
        <NavLink style={styles.link} to="/login">
          Log In
        </NavLink>{' '}
        or{' '}
        <NavLink style={styles.link} to="/register">
          Register
        </NavLink>{' '}
        to view your{' '}
        <NavLink style={styles.link} to="/contacts">
          Contacts
        </NavLink>
      </p>
    </div>
  );
};
