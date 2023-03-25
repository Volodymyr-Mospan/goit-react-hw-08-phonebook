import React from 'react';
import { ContactsPage } from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Home } from 'pages/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Route>
    </Routes>
  );
};
