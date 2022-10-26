import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './Constants/Routes/routes';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

import Home from '../Pages/Home/Home';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import styles from './App.module.scss';
import Contacs from './PageComponents/Contacts/Contacs';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.app__container}>
        <BackTop>
          <div className={styles.app__backTop}>
            <UpOutlined />
          </div>
        </BackTop>
        <Header />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route />
          <Route />
          <Route path={ROUTES.CONTACTS} element={<Contacs />} />
          <Route />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
