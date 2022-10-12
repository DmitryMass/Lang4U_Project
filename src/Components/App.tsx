import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';

import { ROUTES } from './Constants/Routes/routes';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route />
          <Route />
          <Route />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
