import React, { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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

import Registration from '../Pages/Auth/Registration/Registration';
import NotFound from './NotFound/NotFound';

import UserPage from '../Pages/UserPage/UserPage';
import Admin from '../Pages/Admin/Admin';
import { useGetCourseQuery } from '../Store/Api-Query/Courses/courses';
import { useDispatch } from 'react-redux';
import useActions from '../Store/hooks-store/actions';
import Suggestions from '../Pages/Suggestions/Suggestions';
import AlertComponent from './Error/ErrorComponent';
import Loader from './Loader/Loader';

import styles from './App.module.scss';
const App: FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { getCourses } = useActions();
  const { data = [], isSuccess, isLoading } = useGetCourseQuery([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    if (isSuccess) {
      dispatch(getCourses(data));
    }
  }, [location, data, dispatch, isSuccess, getCourses]);

  return (
    <div className={styles.app}>
      {isLoading && (
        <div className={styles.app__modal}>
          <AlertComponent
            type='warning'
            message='Завантажую дані почекайте..'
          />
          <Loader />
        </div>
      )}
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
          <Route path={ROUTES.SUGGESTIONS} element={<Suggestions />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.NOTFOUND} element={<NotFound />} />
          <Route
            path={`${ROUTES.USERPAGE}/*`}
            element={
              localStorage.user ? <UserPage /> : <Navigate to={ROUTES.HOME} />
            }
          />
          <Route
            path={ROUTES.ADMIN}
            element={
              localStorage.admin ? <Admin /> : <Navigate to={ROUTES.HOME} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
