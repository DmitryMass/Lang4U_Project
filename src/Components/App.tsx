import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './Constants/Routes/routes';
import { BackTop } from 'antd';
import { UpOutlined } from '@ant-design/icons';

import Home from '../Pages/Home/Home';
import Footer from './Footer/Footer';
import Header from './Header/Header';

import Contacts from './PageComponents/Contacts/Contacts';
import Support from '../Pages/Support/Support';
import Tabs from './Breadcrumb/Tabs';
import Faq from '../Pages/FAQ/Faq';
import About from '../Pages/AboutUs/About';
import Courses from '../Pages/Courses/Courses';
import CoursesItem from '../Pages/Courses/CoursesItem/CoursesItem';
import styles from './App.module.scss';

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
          <Route path={ROUTES.COURSES} element={<Courses />} />
          <Route path={ROUTES.ABOUTUS} element={<About />} />
          <Route path={ROUTES.CONTACTS} element={<Contacts />} />
          <Route path={ROUTES.SUPPORT} element={<Support />} />
          <Route path={ROUTES.FAQ} element={<Faq />} />
          <Route path={ROUTES.COURSESITEM} element={<CoursesItem />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
