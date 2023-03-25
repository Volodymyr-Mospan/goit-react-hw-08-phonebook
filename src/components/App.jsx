import React, { useEffect } from 'react';
import { Contacts } from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/HomePage';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/options';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks/useAuth';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestictedRoute';
import Register from 'pages/RegisterPage';
import Login from 'pages/LoginPage';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    // <Routes>
    //   <Route path="/" element={<Header />}>
    //     <Route index element={<Home />} />
    //     <Route
    //       path="/contacts"
    //       element={<PrivateRoute redirectTo="/" component={<ContactsPage />} />}
    //     ></Route>
    //   </Route>
    // </Routes>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
