import React, { useEffect } from 'react';
import { ContactsPage } from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Home } from 'pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/options';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/" component={<ContactsPage />} />
            }
          ></Route>
        </Route>
      </Routes>
    )
  );
};
