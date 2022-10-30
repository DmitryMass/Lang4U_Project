import React, { FC, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
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
import Login from '../Pages/Auth/Login/Login';

import styles from './App.module.scss';
import Registration from '../Pages/Auth/Registration/Registration';

const App: FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

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
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
