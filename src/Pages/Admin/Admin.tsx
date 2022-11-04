import React, { FC } from 'react';
import AdminForm from '../../Components/Form/AdminForm/AdminForm';
import AdminRules from '../../Components/PageComponents/Admin/AdminRules/AdminRules';
import ListOfCourses from '../../Components/PageComponents/Admin/ListOfCourses/ListOfCourses';
import MainTitle from '../../Components/Text/Titles/MainTitle';

import styles from './admin.module.scss';

const Admin: FC = () => {
  return (
    <section className={styles.admin}>
      <div className={styles.admin__wrapper}>
        <MainTitle modificator='contacts__title'>
          Панель Адміністратора
        </MainTitle>
        <AdminRules />
        <div className={styles.admin__container}>
          <ListOfCourses />
          <AdminForm />
        </div>
      </div>
    </section>
  );
};

export default Admin;
