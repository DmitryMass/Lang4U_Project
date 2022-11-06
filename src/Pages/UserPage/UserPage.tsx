import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES_USER } from '../../Components/Constants/Routes/routes';
import UserNav from '../../Components/PageComponents/UserPage/UserNav/UserNav';

import UserCourse from './UserCourse/UserCourse';
// import UserInfo from './UserInfo/UserInfo';
import UserSettings from './UserSettings/UserSettings';

import styles from './user-page.module.scss';

const UserPage: FC = () => {
  return (
    <section className={styles.userpage}>
      <UserNav />
      <Routes>
        <Route path={ROUTES_USER.course} element={<UserCourse />} />
        <Route path={ROUTES_USER.settings} element={<UserSettings />} />
      </Routes>
      <div>hello</div>
    </section>
  );
};

export default UserPage;
