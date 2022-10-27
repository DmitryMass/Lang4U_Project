import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './Constants/Routes/routes';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

import Home from '../Pages/Home/Home';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import styles from './App.module.scss';
import Contacts from './PageComponents/Contacts/Contacts';
import Support from '../Pages/Support/Support';
import Tabs from './Breadcrumb/Tabs';

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
        <Tabs />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route />
          <Route />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.SUPPORT} element={<Support />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
