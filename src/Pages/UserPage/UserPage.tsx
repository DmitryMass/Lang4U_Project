import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES_USER } from '../../Components/Constants/Routes/routes';
import UserNav from '../../Components/PageComponents/UserPage/UserNav/UserNav';

import UserCourse from './UserCourse/UserCourse';
import UserInfo from './UserInfo/UserInfo';
import UserSettings from './UserSettings/UserSettings';

import styles from './user-page.module.scss';
import { useDispatch } from 'react-redux';
import { useGetUserInfoQuery } from '../../Store/Api-Query/User/user';
import useActions from '../../Store/hooks-store/actions';

const UserPage: FC = () => {
  const dispatch = useDispatch();
  const { data = null } = useGetUserInfoQuery(null);
  const { saveCourse } = useActions();

  useEffect(() => {
    if (!data) return;
    Promise.all(
      data?.course.map((url: string) =>
        fetch(`http://localhost:3005/api/course/${url}`)
      )
    )
      .then((response) =>
        Promise.all<any>(response.map((res: any) => res.json()))
      )
      .then((res) => {
        dispatch(saveCourse(res));
        return res;
      })
      .catch((e) => console.log(e.message));
    //  eslint-disable-next-line
  }, [data]);

  return (
    <section className={styles.userpage}>
      <UserNav />
      <Routes>
        <Route path={ROUTES_USER.main} element={<UserInfo />} />
        <Route path={ROUTES_USER.course} element={<UserCourse />} />
        <Route path={ROUTES_USER.settings} element={<UserSettings />} />
      </Routes>
    </section>
  );
};

export default UserPage;
